import { useCallback, useEffect, useRef, useState } from 'react';
import type { Icebreaker } from '../data/icebreakers';

// Rooms and Slack both live on the API worker (api/). Without it, those buttons stay hidden.
export const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '');
export const SLACK_INSTALL_URL = API_URL && `${API_URL}/slack/install`;

export interface RoomPerson { pid: string; name: string; online: boolean; answered: boolean }

export interface RoomState {
  code: string;
  round: number;
  question: Pick<Icebreaker, 'id' | 'question' | 'category' | 'mode'>;
  revealed: boolean;
  anonymous: boolean;
  filter?: string;
  people: RoomPerson[];
  answers?: { name?: string; text: string }[];
  me: { pid: string; host: boolean; name?: string; answer?: string };
  notice?: string;
}

export type RoomStatus = 'connecting' | 'live' | 'reconnecting' | 'missing' | 'expired';

// In-app browsers sometimes block storage; fall back to memory so rooms still work.
const memory = new Map<string, string>();
export const store = {
  get(key: string) {
    try { return localStorage.getItem(key) ?? memory.get(key) ?? null; } catch { return memory.get(key) ?? null; }
  },
  set(key: string, value: string) {
    memory.set(key, value);
    try { localStorage.setItem(key, value); } catch { /* memory is enough */ }
  },
};

function randomId() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
}

/** Stays the same on this device, so refreshing or reconnecting keeps your name and answer. */
function deviceSecret() {
  let secret = store.get('ib-device-secret');
  if (!secret) store.set('ib-device-secret', (secret = randomId()));
  return secret;
}

const hostKeyName = (code: string) => `ib-room-host-${code}`;

export async function createRoom(questionId: string): Promise<string> {
  const res = await fetch(`${API_URL}/rooms`, { method: 'POST', body: JSON.stringify({ questionId }) });
  if (!res.ok) throw new Error(`couldn't create room (${res.status})`);
  const { code, hostKey } = await res.json();
  store.set(hostKeyName(code), hostKey);
  return code;
}

export function roomLink(code: string) {
  return `${window.location.origin}/?room=${code}`;
}

export function useRoom(code: string) {
  const [state, setState] = useState<RoomState | null>(null);
  const [status, setStatus] = useState<RoomStatus>('connecting');
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    let stopped = false;
    let attempt = 0;
    let retry: ReturnType<typeof setTimeout> | undefined;
    let ping: ReturnType<typeof setInterval> | undefined;

    const connect = async () => {
      if (stopped) return;
      try {
        const check = await fetch(`${API_URL}/rooms/${code}`);
        if (check.status === 404) return setStatus('missing');
      } catch {
        return scheduleRetry(); // offline; try again shortly
      }
      if (stopped) return;

      const socket = new WebSocket(`${API_URL!.replace(/^http/, 'ws')}/rooms/${code}/ws`);
      ws.current = socket;
      socket.onopen = () => {
        attempt = 0;
        socket.send(JSON.stringify({ t: 'hello', secret: deviceSecret(), hostKey: store.get(hostKeyName(code)) ?? undefined }));
        // Mobile networks drop quiet sockets; the worker answers these without waking the room.
        ping = setInterval(() => socket.readyState === WebSocket.OPEN && socket.send('ping'), 25_000);
      };
      socket.onmessage = e => {
        if (e.data === 'pong') return;
        const msg = JSON.parse(e.data);
        if (msg.t === 'state') {
          setState(msg);
          setStatus('live');
        }
      };
      socket.onclose = e => {
        clearInterval(ping);
        if (stopped || ws.current !== socket) return;
        if (e.code === 4410) return setStatus('expired');
        scheduleRetry();
      };
    };

    const scheduleRetry = () => {
      if (stopped) return;
      setStatus('reconnecting');
      clearTimeout(retry);
      retry = setTimeout(connect, Math.min(1000 * 2 ** attempt++, 10_000));
    };

    // Phones suspend background tabs; reconnect right away when the room comes back into view.
    const onVisible = () => {
      const rs = ws.current?.readyState;
      if (document.visibilityState === 'visible' && rs !== WebSocket.OPEN && rs !== WebSocket.CONNECTING) {
        attempt = 0;
        clearTimeout(retry);
        connect();
      }
    };

    connect();
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      stopped = true;
      clearTimeout(retry);
      clearInterval(ping);
      document.removeEventListener('visibilitychange', onVisible);
      ws.current?.close();
    };
  }, [code]);

  const send = useCallback((msg: Record<string, unknown>) => {
    if (ws.current?.readyState === WebSocket.OPEN) ws.current.send(JSON.stringify(msg));
  }, []);

  return { state, status, send };
}
