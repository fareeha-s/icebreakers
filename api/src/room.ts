import { DurableObject } from 'cloudflare:workers';
import type { Env } from './index';
import { byId, isFilter, pick, type Icebreaker } from './questions';

const MAX_PEOPLE = 60;
const MAX_NAME = 24;
const MAX_ANSWER = 280;
const IDLE_TTL = 24 * 60 * 60 * 1000;

interface Person { name: string; joinedAt: number }

interface RoomData {
  code: string;
  hostKey: string;
  questionId: string;
  round: number;
  revealed: boolean;
  anonymous: boolean;
  filter?: string;
  used: string[];
  people: Record<string, Person>; // keyed by public id
  answers: Record<string, string>; // this round only
}

interface Attachment { pid: string; host: boolean }

type ClientMessage =
  | { t: 'hello'; secret: string; hostKey?: string }
  | { t: 'name'; name: string }
  | { t: 'answer'; text: string }
  | { t: 'reveal' }
  | { t: 'next'; filter?: string }
  | { t: 'anonymous'; on: boolean };

/**
 * One live room. People connect over WebSocket, answer privately, and the host reveals
 * everyone's answers at once. Uses the hibernation API, so an idle room costs nothing.
 */
export class Room extends DurableObject<Env> {
  private data?: RoomData;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    // Keep-alive pings get answered without waking the room up.
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair('ping', 'pong'));
    ctx.blockConcurrencyWhile(async () => {
      this.data = await ctx.storage.get<RoomData>('room');
    });
  }

  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);

    if (url.pathname === '/init') {
      if (this.data) return new Response('taken', { status: 409 });
      const { code, hostKey, questionId } = await req.json<{ code: string; hostKey: string; questionId?: string }>();
      const first = (questionId && byId(questionId)) || pick();
      this.data = {
        code, hostKey, questionId: first.id, round: 1, revealed: false, anonymous: false,
        used: [first.id], people: {}, answers: {},
      };
      await this.save();
      return new Response('ok');
    }

    if (!this.data) return new Response('room not found', { status: 404, headers: { 'access-control-allow-origin': '*' } });
    if (url.pathname === '/exists') return new Response('ok', { headers: { 'access-control-allow-origin': '*' } });
    if (req.headers.get('upgrade') !== 'websocket') return new Response('expected websocket', { status: 426 });
    if (this.ctx.getWebSockets().length >= MAX_PEOPLE * 3) return new Response('room is full', { status: 429 });

    const { 0: client, 1: server } = new WebSocketPair();
    this.ctx.acceptWebSocket(server);
    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(ws: WebSocket, raw: string | ArrayBuffer) {
    if (!this.data || typeof raw !== 'string' || raw.length > 2000) return;
    let msg: ClientMessage;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }
    const me = ws.deserializeAttachment() as Attachment | null;

    if (msg.t === 'hello') {
      if (typeof msg.secret !== 'string' || msg.secret.length < 16) return ws.close(4400, 'bad hello');
      const pid = await publicId(msg.secret);
      ws.serializeAttachment({ pid, host: msg.hostKey === this.data.hostKey } satisfies Attachment);
      // Everyone else needs to see this person come online.
      return this.broadcast();
    }
    if (!me) return; // must say hello first

    const d = this.data;
    switch (msg.t) {
      case 'name': {
        const name = clean(msg.name, MAX_NAME);
        if (!name) return;
        if (!d.people[me.pid] && Object.keys(d.people).length >= MAX_PEOPLE) return this.send(ws, 'This room is full.');
        d.people[me.pid] = { name, joinedAt: d.people[me.pid]?.joinedAt ?? Date.now() };
        break;
      }
      case 'answer': {
        if (d.revealed || !d.people[me.pid]) return;
        const text = clean(msg.text, MAX_ANSWER);
        if (text) d.answers[me.pid] = text;
        else delete d.answers[me.pid];
        break;
      }
      case 'reveal':
        if (!me.host) return;
        d.revealed = true;
        break;
      case 'next': {
        if (!me.host) return;
        d.filter = isFilter(msg.filter) ? msg.filter : undefined;
        const next = pick(d.filter, d.used);
        d.questionId = next.id;
        d.used = [...d.used, next.id].slice(-200);
        d.round++;
        d.revealed = false;
        d.answers = {};
        break;
      }
      case 'anonymous':
        if (!me.host) return;
        d.anonymous = !!msg.on;
        break;
      default:
        return;
    }
    await this.save();
    this.broadcast();
  }

  async webSocketClose(ws: WebSocket, code: number) {
    try {
      ws.close(code === 1005 ? 1000 : code);
    } catch {
      // already closed
    }
    this.broadcast();
  }

  async webSocketError() {
    this.broadcast();
  }

  async alarm() {
    // Nobody touched the room for a day: forget it so the code can be reused.
    for (const ws of this.ctx.getWebSockets()) ws.close(4410, 'room expired');
    await this.ctx.storage.deleteAll();
    this.data = undefined;
  }

  private async save() {
    await this.ctx.storage.put('room', this.data);
    await this.ctx.storage.setAlarm(Date.now() + IDLE_TTL);
  }

  private broadcast() {
    for (const ws of this.ctx.getWebSockets()) this.send(ws);
  }

  private send(ws: WebSocket, notice?: string) {
    const me = ws.deserializeAttachment() as Attachment | null;
    if (!me || !this.data) return;
    try {
      ws.send(JSON.stringify(this.view(me, notice)));
    } catch {
      // socket went away mid-broadcast; its close handler will tidy up
    }
  }

  /** What one person sees. Answers stay hidden until the host reveals them. */
  private view(me: Attachment, notice?: string) {
    const d = this.data!;
    const online = new Set(
      this.ctx.getWebSockets()
        .filter(ws => ws.readyState === WebSocket.OPEN)
        .map(ws => (ws.deserializeAttachment() as Attachment | null)?.pid),
    );
    const people = Object.entries(d.people)
      .sort(([, a], [, b]) => a.joinedAt - b.joinedAt)
      .map(([pid, p]) => ({ pid, name: p.name, online: online.has(pid), answered: pid in d.answers }));

    let answers: { name?: string; text: string }[] | undefined;
    if (d.revealed) {
      answers = Object.entries(d.answers).map(([pid, text]) => ({ name: d.anonymous ? undefined : d.people[pid]?.name, text }));
      // Anonymous answers shouldn't be traceable by the order people joined in.
      if (d.anonymous) answers = shuffled(answers, `${d.code}:${d.round}`);
    }

    const q = byId(d.questionId) as Icebreaker;
    return {
      t: 'state',
      notice,
      code: d.code,
      round: d.round,
      question: { id: q.id, question: q.question, category: q.category, mode: q.mode },
      revealed: d.revealed,
      anonymous: d.anonymous,
      filter: d.filter,
      people,
      answers,
      me: { pid: me.pid, host: me.host, name: d.people[me.pid]?.name, answer: d.answers[me.pid] },
    };
  }
}

async function publicId(secret: string): Promise<string> {
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(secret));
  return [...new Uint8Array(hash).slice(0, 8)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function clean(s: unknown, max: number): string {
  return typeof s === 'string' ? s.replace(/\s+/g, ' ').trim().slice(0, max) : '';
}

/** Stable shuffle, so every viewer sees anonymous answers in the same order. */
function shuffled<T>(items: T[], seed: string): T[] {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const rand = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
