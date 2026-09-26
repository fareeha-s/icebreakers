import type { Env } from './index';
import { FILTER_NAMES, byId, isFilter, pick } from './questions';
import { fmtTime, isValidTimeZone, nextWeekdayAt, parseTime } from './schedule';
import { HELP, previewMessage, questionMessage, respond, slackApi } from './slack';

const SCOPES = 'commands,chat:write,chat:write.public,users:read';
// Errors that mean we'll never be able to post there again, so the schedule should go.
const DEAD_CHANNEL_ERRORS = ['invalid_auth', 'account_inactive', 'token_revoked', 'missing_scope', 'channel_not_found', 'not_in_channel', 'is_archived'];
// Free Workers get 50 outbound requests per run; leave headroom.
const DAILY_BATCH = 40;
// After an outage, don't post yesterday's 9am question at 3pm.
const STALE_AFTER = 2 * 60 * 60 * 1000;

// ---- /icebreaker ------------------------------------------------------------

export function command(form: URLSearchParams, env: Env, ctx: ExecutionContext): Response {
  const words = (form.get('text') || '').trim().toLowerCase().split(/\s+/).filter(Boolean);
  const [first, ...rest] = words;

  if (first === 'help') return json({ response_type: 'ephemeral', text: HELP });

  if (first === 'daily') {
    // Needs a few API calls, so answer via response_url instead of inside Slack's 3s window.
    ctx.waitUntil(
      daily(rest, form, env)
        .catch(err => {
          console.error('daily setup failed', err);
          return 'Something went wrong setting that up. Try again in a minute?';
        })
        .then(text => respond(form.get('response_url')!, { response_type: 'ephemeral', text })),
    );
    return new Response(null, { status: 200 });
  }

  if (first && !isFilter(first)) {
    return json({ response_type: 'ephemeral', text: `Didn't catch "${first}". Try one of: ${FILTER_NAMES.join(', ')}.\n\n${HELP}` });
  }
  return json(previewMessage(pick(first), first));
}

// ---- buttons ----------------------------------------------------------------

interface InteractionPayload {
  type: string;
  user: { id: string };
  team: { id: string } | null;
  channel?: { id: string };
  response_url?: string;
  actions?: { action_id: string; value: string }[];
}

export async function interaction(p: InteractionPayload, env: Env) {
  const action = p.actions?.[0];
  if (p.type !== 'block_actions' || !action || !p.response_url) return;
  const [id, filter] = action.value.split('|');

  if (action.action_id === 'shuffle') {
    await respond(p.response_url, { replace_original: true, ...previewMessage(pick(filter, [id]), filter) });
  }

  if (action.action_id === 'post') {
    const ib = byId(id);
    if (!ib) return;
    // response_url posts even in private channels and DMs the bot was never invited to.
    await respond(p.response_url, { response_type: 'in_channel', replace_original: false, ...questionMessage(ib, p.user.id) });
    await respond(p.response_url, { delete_original: true });
    if (p.team && p.channel) await markSeen(env, p.team.id, p.channel.id, id);
  }
}

// ---- daily questions --------------------------------------------------------

interface DailyRow {
  team_id: string;
  channel_id: string;
  hour: number;
  minute: number;
  tz: string;
  filter: string | null;
  next_at: number;
}

async function daily(args: string[], form: URLSearchParams, env: Env): Promise<string> {
  const team = form.get('team_id')!;
  const channel = form.get('channel_id')!;
  const user = form.get('user_id')!;

  if (args[0] === 'off' || args[0] === 'stop') {
    await env.DB.prepare('DELETE FROM dailies WHERE team_id = ? AND channel_id = ?').bind(team, channel).run();
    return 'Daily icebreakers are off for this channel.';
  }

  if (!args.length) {
    const d = await env.DB.prepare('SELECT * FROM dailies WHERE team_id = ? AND channel_id = ?').bind(team, channel).first<DailyRow>();
    return d
      ? `This channel gets ${d.filter ? `a ${d.filter}` : 'an'} icebreaker every weekday at ${fmtTime(d.hour, d.minute)} (${d.tz}). \`/icebreaker daily off\` to stop.`
      : 'No daily icebreaker here yet. Try `/icebreaker daily 9am`.';
  }

  const time = parseTime(args[0]);
  if (!time) return `Couldn't read "${args[0]}" as a time. Try \`/icebreaker daily 9am\` or \`/icebreaker daily 14:30\`.`;
  const filter = args[1];
  if (filter && !isFilter(filter)) return `Unknown kind "${filter}". Pick one of: ${FILTER_NAMES.join(', ')}.`;

  const token = await botToken(env, team);
  if (!token) return 'icebreakers isn\'t fully installed in this workspace. Reinstall it from icebreakers.wiki and try again.';

  const info = await slackApi<{ user?: { tz?: string } }>('users.info', token, { user });
  const tz = info.user?.tz && isValidTimeZone(info.user.tz) ? info.user.tz : 'UTC';
  const when = `every weekday at ${fmtTime(time.hour, time.minute)} (${tz.replace(/_/g, ' ')})`;

  // Posting the confirmation doubles as a check that the bot can actually post here.
  const hello = await slackApi('chat.postMessage', token, {
    channel,
    text: `<@${user}> set up a daily icebreaker here: ${when}. Answers go in the thread 🧵`,
  });
  if (!hello.ok) {
    if (hello.error === 'not_in_channel' || hello.error === 'channel_not_found') {
      return form.get('channel_name') === 'directmessage'
        ? 'Daily questions work in channels, not DMs. Try it in a channel!'
        : 'I can\'t post here yet. Invite me with `/invite @icebreakers`, then run this again.';
    }
    return `Slack said no: \`${hello.error}\``;
  }

  await env.DB.prepare(
    `INSERT INTO dailies (team_id, channel_id, hour, minute, tz, filter, set_by, next_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT (team_id, channel_id) DO UPDATE SET hour = excluded.hour, minute = excluded.minute, tz = excluded.tz,
       filter = excluded.filter, set_by = excluded.set_by, next_at = excluded.next_at`,
  ).bind(team, channel, time.hour, time.minute, tz, filter ?? null, user, nextWeekdayAt(time.hour, time.minute, tz)).run();

  return `Done. ${filter ? `A ${filter}` : 'An'} icebreaker will land here ${when}.`;
}

export async function postDueDailies(env: Env) {
  const now = Date.now();
  const { results } = await env.DB.prepare('SELECT * FROM dailies WHERE next_at <= ? ORDER BY next_at LIMIT ?')
    .bind(now, DAILY_BATCH).all<DailyRow>();

  for (const d of results) {
    // Claim the row by moving next_at forward first, so overlapping runs can't double-post.
    const claimed = await env.DB.prepare('UPDATE dailies SET next_at = ? WHERE team_id = ? AND channel_id = ? AND next_at = ?')
      .bind(nextWeekdayAt(d.hour, d.minute, d.tz, now), d.team_id, d.channel_id, d.next_at).run();
    if (!claimed.meta.changes || now - d.next_at > STALE_AFTER) continue;

    const token = await botToken(env, d.team_id);
    if (!token) continue;
    const ib = pick(d.filter ?? undefined, await seen(env, d.team_id, d.channel_id));
    const res = await slackApi('chat.postMessage', token, { channel: d.channel_id, ...questionMessage(ib) });

    if (res.ok) {
      await markSeen(env, d.team_id, d.channel_id, ib.id);
    } else if (DEAD_CHANNEL_ERRORS.includes(res.error || '')) {
      await env.DB.prepare('DELETE FROM dailies WHERE team_id = ? AND channel_id = ?').bind(d.team_id, d.channel_id).run();
    } else {
      console.error('daily post failed', d.team_id, d.channel_id, res.error);
    }
  }
}

// ---- no repeats per channel -------------------------------------------------

async function seen(env: Env, team: string, channel: string): Promise<string[]> {
  const { results } = await env.DB.prepare('SELECT question_id FROM seen WHERE team_id = ? AND channel_id = ? ORDER BY at DESC LIMIT 200')
    .bind(team, channel).all<{ question_id: string }>();
  return results.map(r => r.question_id);
}

async function markSeen(env: Env, team: string, channel: string, id: string) {
  await env.DB.prepare('INSERT INTO seen (team_id, channel_id, question_id, at) VALUES (?, ?, ?, ?)').bind(team, channel, id, Date.now()).run();
}

export async function pruneSeen(env: Env) {
  await env.DB.prepare('DELETE FROM seen WHERE at < ?').bind(Date.now() - 365 * 24 * 60 * 60 * 1000).run();
}

// ---- install (OAuth) --------------------------------------------------------

async function botToken(env: Env, team: string): Promise<string | undefined> {
  // Single-workspace setups skip OAuth and paste the bot token as a secret instead.
  if (!env.SLACK_CLIENT_ID) return env.SLACK_BOT_TOKEN;
  const row = await env.DB.prepare('SELECT bot_token FROM teams WHERE team_id = ?').bind(team).first<{ bot_token: string }>();
  return row?.bot_token;
}

export function install(url: URL, env: Env): Response {
  if (!env.SLACK_CLIENT_ID) {
    return env.SLACK_BOT_TOKEN
      ? page('This icebreakers deployment is set up for one Slack workspace, so there\'s nothing to install here.')
      : page('Add to Slack isn\'t configured on this deployment yet.', 501);
  }
  const state = crypto.randomUUID();
  const authorize = new URL('https://slack.com/oauth/v2/authorize');
  authorize.searchParams.set('client_id', env.SLACK_CLIENT_ID);
  authorize.searchParams.set('scope', SCOPES);
  authorize.searchParams.set('redirect_uri', new URL('/slack/oauth', url).toString());
  authorize.searchParams.set('state', state);
  return new Response(null, {
    status: 302,
    headers: {
      location: authorize.toString(),
      'set-cookie': `ib_state=${state}; Path=/slack; HttpOnly; Secure; SameSite=Lax; Max-Age=900`,
    },
  });
}

export async function oauthCallback(req: Request, url: URL, env: Env): Promise<Response> {
  if (url.searchParams.get('error')) return page('No worries, nothing was installed.');
  const state = url.searchParams.get('state');
  const cookie = req.headers.get('cookie')?.match(/(?:^|;\s*)ib_state=([^;]+)/)?.[1];
  if (!state || state !== cookie) {
    return page(`That install link expired. <a href="/slack/install" style="color:#fff">Try again →</a>`, 400);
  }

  const res = await fetch('https://slack.com/api/oauth.v2.access', {
    method: 'POST',
    body: new URLSearchParams({
      client_id: env.SLACK_CLIENT_ID!,
      client_secret: env.SLACK_CLIENT_SECRET!,
      code: url.searchParams.get('code') || '',
      redirect_uri: new URL('/slack/oauth', url).toString(),
    }),
  });
  const data = await res.json<{ ok: boolean; error?: string; access_token?: string; team?: { id: string; name: string } }>();
  if (!data.ok || !data.access_token || !data.team) return page(`Slack returned an error: ${escapeHtml(data.error || 'unknown')}`, 400);

  await env.DB.prepare(
    `INSERT INTO teams (team_id, bot_token, team_name, installed_at) VALUES (?, ?, ?, ?)
     ON CONFLICT (team_id) DO UPDATE SET bot_token = excluded.bot_token, team_name = excluded.team_name, installed_at = excluded.installed_at`,
  ).bind(data.team.id, data.access_token, data.team.name, Date.now()).run();

  return page(
    `icebreakers is in <b>${escapeHtml(data.team.name)}</b> 🧊<br><br>Type <code>/icebreaker</code> in any channel, or <code>/icebreaker daily 9am</code> for a question every weekday morning.<br><br><a href="slack://open?team=${encodeURIComponent(data.team.id)}" style="color:#fff">Open Slack →</a>`,
    200,
    'set-cookie',
  );
}

// ---- helpers ----------------------------------------------------------------

function json(body: unknown): Response {
  return new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json' } });
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
}

function page(message: string, status = 200, clearCookie?: 'set-cookie'): Response {
  const headers: Record<string, string> = { 'content-type': 'text/html; charset=utf-8' };
  if (clearCookie) headers['set-cookie'] = 'ib_state=; Path=/slack; Max-Age=0';
  return new Response(
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>icebreakers for Slack</title>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;font:18px/1.5 system-ui,sans-serif;color:#fff;background:linear-gradient(135deg,#8b7fd4,#6fa3d8,#6cc3b8)">
<p style="max-width:28rem;margin:1rem;padding:2rem;border-radius:1.5rem;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);backdrop-filter:blur(12px)">${message}</p>`,
    { status, headers },
  );
}
