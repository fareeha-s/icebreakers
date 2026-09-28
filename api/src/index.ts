import { Room } from './room';
import { verifySlackRequest } from './slack';
import { command, install, interaction, oauthCallback, postDueDailies, pruneSeen } from './slackbot';

export { Room };

export interface Env {
  DB: D1Database;
  ROOMS: DurableObjectNamespace<Room>;
  SLACK_SIGNING_SECRET: string;
  // For "Add to Slack" (any workspace). Optional if you only install into your own workspace.
  SLACK_CLIENT_ID?: string;
  SLACK_CLIENT_SECRET?: string;
  // Single-workspace shortcut: paste the bot token from the Slack app settings instead of doing OAuth.
  SLACK_BOT_TOKEN?: string;
}

// No 0/O/1/I/L/5/S: room codes get read aloud and typed on phones.
const CODE_ALPHABET = 'ABCDEFGHJKMNPQRTUVWXYZ2346789';
const CODE_PATTERN = new RegExp(`^[${CODE_ALPHABET}]{4}$`);

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type',
};

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;

    // ---- live rooms ----
    if (path === '/rooms' && req.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (path === '/rooms' && req.method === 'POST') return createRoom(req, env);
    const roomMatch = path.match(/^\/rooms\/([A-Za-z0-9]{4})(\/ws)?$/);
    if (roomMatch) {
      const code = roomMatch[1].toUpperCase();
      if (!CODE_PATTERN.test(code)) return new Response('room not found', { status: 404, headers: CORS });
      const room = env.ROOMS.get(env.ROOMS.idFromName(code));
      // GET /rooms/ABCD checks the room exists; /rooms/ABCD/ws joins it.
      return roomMatch[2] ? room.fetch(req) : room.fetch('https://room/exists');
    }

    // ---- slack ----
    if (req.method === 'GET' && path === '/slack/install') return install(url, env);
    if (req.method === 'GET' && path === '/slack/oauth') return oauthCallback(req, url, env);
    if (req.method === 'GET' && path === '/') return Response.redirect('https://icebreakers.best', 302);

    if (req.method === 'POST' && path.startsWith('/slack/')) {
      const body = await req.text();
      const form = new URLSearchParams(body);
      // Slack pings the command URL to check the certificate; nothing to do.
      if (form.get('ssl_check') === '1') return new Response(null, { status: 200 });
      if (!(await verifySlackRequest(req, body, env.SLACK_SIGNING_SECRET))) return new Response('bad signature', { status: 401 });

      if (path === '/slack/commands') return command(form, env, ctx);
      if (path === '/slack/interactions') {
        let payload;
        try {
          payload = JSON.parse(form.get('payload') || '');
        } catch {
          return new Response('bad payload', { status: 400 });
        }
        ctx.waitUntil(interaction(payload, env).catch(err => console.error('interaction failed', err)));
        return new Response(null, { status: 200 });
      }
    }

    return new Response('not found', { status: 404 });
  },

  async scheduled(event: ScheduledController, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(postDueDailies(env));
    // Once a day is plenty for housekeeping.
    if (new Date(event.scheduledTime).getUTCHours() === 4 && new Date(event.scheduledTime).getUTCMinutes() < 5) {
      ctx.waitUntil(pruneSeen(env));
    }
  },
};

async function createRoom(req: Request, env: Env): Promise<Response> {
  const { questionId } = await req.json<{ questionId?: string }>().catch(() => ({ questionId: undefined }));
  const hostKey = crypto.randomUUID();
  for (let attempt = 0; attempt < 8; attempt++) {
    const code = [...crypto.getRandomValues(new Uint8Array(4))].map(b => CODE_ALPHABET[b % CODE_ALPHABET.length]).join('');
    const res = await env.ROOMS.get(env.ROOMS.idFromName(code)).fetch('https://room/init', {
      method: 'POST',
      body: JSON.stringify({ code, hostKey, questionId: typeof questionId === 'string' ? questionId : undefined }),
    });
    if (res.ok) return Response.json({ code, hostKey }, { headers: CORS });
  }
  return new Response('could not find a free room code', { status: 503, headers: CORS });
}
