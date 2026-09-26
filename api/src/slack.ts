import { label, type Icebreaker } from './questions';

const enc = new TextEncoder();

/** https://api.slack.com/authentication/verifying-requests-from-slack */
export async function verifySlackRequest(req: Request, body: string, secret: string): Promise<boolean> {
  const ts = req.headers.get('x-slack-request-timestamp');
  const sig = req.headers.get('x-slack-signature');
  if (!ts || !sig) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 60 * 5) return false;

  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, enc.encode(`v0:${ts}:${body}`));
  const expected = 'v0=' + [...new Uint8Array(mac)].map(b => b.toString(16).padStart(2, '0')).join('');
  return timingSafeEqual(expected, sig);
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function slackApi<T = Record<string, unknown>>(
  method: string,
  token: string,
  args: Record<string, unknown>,
): Promise<T & { ok: boolean; error?: string }> {
  const res = await fetch(`https://slack.com/api/${method}`, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(args),
  });
  // Rate limits and outages don't always come back as JSON.
  const data = await res.json<T & { ok: boolean; error?: string }>().catch(() => null);
  return data ?? ({ ok: false, error: `http_${res.status}` } as T & { ok: boolean; error?: string });
}

export function respond(responseUrl: string, message: Record<string, unknown>) {
  // Only ever call back to Slack, whatever a payload claims.
  if (!responseUrl.startsWith('https://hooks.slack.com/')) return Promise.resolve(undefined);
  return fetch(responseUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(message),
  });
}

// ---- message builders -------------------------------------------------------

/** Private preview only the person who ran /icebreaker sees. */
export function previewMessage(ib: Icebreaker, filter = '') {
  const value = `${ib.id}|${filter}`;
  return {
    response_type: 'ephemeral',
    text: ib.question,
    blocks: [
      { type: 'section', text: { type: 'mrkdwn', text: `*${escape(ib.question)}*` } },
      { type: 'context', elements: [{ type: 'mrkdwn', text: `${label(ib)} · only you can see this` }] },
      {
        type: 'actions',
        elements: [
          { type: 'button', action_id: 'post', text: { type: 'plain_text', text: 'Post to channel' }, style: 'primary', value },
          { type: 'button', action_id: 'shuffle', text: { type: 'plain_text', text: 'Shuffle 🔀' }, value },
        ],
      },
    ],
  };
}

/** The public question. Answers go in the thread so the channel stays tidy. */
export function questionMessage(ib: Icebreaker, askedBy?: string) {
  const intro = askedBy ? `<@${askedBy}> asks:` : '☀️ Today\'s icebreaker';
  return {
    text: ib.question,
    unfurl_links: false,
    blocks: [
      { type: 'context', elements: [{ type: 'mrkdwn', text: intro }] },
      { type: 'section', text: { type: 'mrkdwn', text: `*${escape(ib.question)}*` } },
      {
        type: 'context',
        elements: [{ type: 'mrkdwn', text: `🧵 answer in the thread · ${label(ib)} · <https://icebreakers.wiki|icebreakers.wiki>` }],
      },
    ],
  };
}

export const HELP = [
  '*/icebreaker* — get a question (only you see it until you post it)',
  '*/icebreaker fun | creative | deep | quick | tech* — narrow it down',
  '*/icebreaker daily 9am* — post a question here every weekday at 9am your time (9:30am works too)',
  '*/icebreaker daily 9am deep* — …same, but only deep ones',
  '*/icebreaker daily* — check the schedule · */icebreaker daily off* — stop it',
].join('\n');

function escape(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
