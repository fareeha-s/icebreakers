import { useEffect, useState } from 'react';
import { Check, Copy, Eye, EyeOff, QrCode, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { roomLink, store, useRoom, type RoomState } from '../lib/rooms';

interface RoomProps {
  code: string;
  isDarkMode: boolean;
  justCreated: boolean;
  onLeave: () => void;
}

const glass = 'bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-white/20';
const pill = `${glass} rounded-xl px-4 py-2.5 text-white transition-all active:scale-95 disabled:opacity-40 disabled:active:scale-100`;
const FILTERS = [
  { value: '', label: 'any' },
  { value: 'fun', label: 'fun' },
  { value: 'creative', label: 'creative' },
  { value: 'deep', label: 'deep' },
  { value: 'quick', label: 'quick' },
];

export default function Room({ code, isDarkMode, justCreated, onLeave }: RoomProps) {
  const { state, status, send } = useRoom(code);
  const [showInvite, setShowInvite] = useState(justCreated);

  const background = isDarkMode ? 'bg-black' : 'bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20';

  if (status === 'missing' || status === 'expired') {
    return (
      <Shell background={background}>
        <div className="glass-card w-full p-8 text-center text-white space-y-4">
          <p className="text-2xl font-medium">
            {status === 'missing' ? `There's no room called ${code}.` : 'This room has ended.'}
          </p>
          <p className="text-white/70">Rooms close after a day of quiet. Double-check the code, or start a fresh one.</p>
          <button onClick={onLeave} className={pill}>back to questions</button>
        </div>
      </Shell>
    );
  }

  if (!state) {
    return (
      <Shell background={background}>
        <p className="text-white/70 text-center animate-pulse">joining room {code}…</p>
      </Shell>
    );
  }

  const answered = state.people.filter(p => p.answered).length;

  return (
    <Shell background={background}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <button onClick={onLeave} className="font-['Space_Grotesk'] text-white text-xl tracking-[0.05em]" aria-label="Leave room">
          ice/breakers
        </button>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowInvite(true)} aria-label={`Invite people to room ${state.code}`} className={`${pill} flex items-center gap-2 py-2 text-sm`}>
            <QrCode className="w-4 h-4" />
            <span className="tracking-[0.2em] font-medium">{state.code}</span>
          </button>
          <button onClick={onLeave} className={`${glass} rounded-xl p-2.5 text-white/80 active:scale-95`} aria-label="Leave room">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {status === 'reconnecting' && (
        <p className="text-center text-sm text-white/70 animate-pulse">reconnecting…</p>
      )}

      {/* Question */}
      <div key={state.round} className="glass-card w-full px-6 py-6 !pb-6 sm:px-10 sm:py-8 sm:!pb-8 animate-[rise_0.5s_ease_both]">
        <div className="flex items-center justify-between mb-3 text-sm sm:text-base text-white/80 uppercase tracking-wider font-medium">
          <span>{state.question.category === 'introspective' ? 'deep' : state.question.category}</span>
          <span className="text-white/50 normal-case tracking-normal text-sm">round {state.round}</span>
        </div>
        <h2 className="text-2xl md:text-4xl text-white font-medium">{state.question.question}</h2>
      </div>

      {state.revealed ? <Answers state={state} /> : <YourAnswer state={state} send={send} />}

      <People state={state} answered={answered} />

      {state.me.host ? (
        <HostControls state={state} answered={answered} send={send} />
      ) : (
        state.revealed && <p className="text-center text-white/60 text-sm">waiting for the next question…</p>
      )}

      {state.notice && <p className="text-center text-rose-100 text-sm">{state.notice}</p>}

      {showInvite && <Invite code={state.code} onClose={() => setShowInvite(false)} />}
    </Shell>
  );
}

function Shell({ background, children }: { background: string; children: React.ReactNode }) {
  return (
    <main className={`fixed inset-0 overflow-y-auto ${background}`}>
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6
        pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(env(safe-area-inset-bottom)+2rem)]
        min-h-full flex flex-col justify-center gap-5">
        {children}
      </div>
    </main>
  );
}

// ---- answering --------------------------------------------------------------

function YourAnswer({ state, send }: { state: RoomState; send: (m: Record<string, unknown>) => void }) {
  const [name, setName] = useState(() => store.get('ib-name') || '');
  const [draft, setDraft] = useState(state.me.answer || '');

  // New round: clear the box. Server-side edits (another tab) win too.
  useEffect(() => setDraft(state.me.answer || ''), [state.round, state.me.answer]);

  if (!state.me.name) {
    const join = (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim()) return;
      store.set('ib-name', name.trim());
      send({ t: 'name', name });
    };
    return (
      <form onSubmit={join} className="flex gap-2">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength={24}
          autoFocus={!state.me.host}
          placeholder="your name"
          className={`${glass} flex-1 min-w-0 rounded-xl px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/50 text-base`}
        />
        <button type="submit" disabled={!name.trim()} className={pill}>join in</button>
      </form>
    );
  }

  const locked = !!state.me.answer && draft.trim() === state.me.answer;
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    send({ t: 'answer', text: draft });
  };

  return (
    <form onSubmit={submit} className="space-y-2">
      <div className="flex gap-2 items-end">
        <textarea
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (draft.trim()) send({ t: 'answer', text: draft });
            }
          }}
          maxLength={280}
          rows={2}
          placeholder={`your answer, ${state.me.name}…`}
          className={`${glass} flex-1 min-w-0 rounded-xl px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/50 resize-none text-base`}
        />
        <button type="submit" disabled={!draft.trim() || locked} className={`${pill} flex items-center gap-1.5 py-3`}>
          {locked ? <><Check className="w-4 h-4" /> in</> : 'lock in'}
        </button>
      </div>
      <p className="text-xs text-white/50 px-1">
        {locked ? 'locked in. you can still edit until the reveal.' : 'nobody sees answers until the host reveals them.'}
      </p>
    </form>
  );
}

function Answers({ state }: { state: RoomState }) {
  const answers = state.answers || [];
  if (!answers.length) return <p className="text-center text-white/70">nobody answered this one 🙈</p>;
  return (
    <div className="columns-1 sm:columns-2 gap-3 [&>*]:mb-3">
      {answers.map((a, i) => (
        <div
          key={`${state.round}-${i}`}
          style={{ animationDelay: `${i * 90}ms` }}
          className={`${glass} break-inside-avoid rounded-2xl px-4 py-3 text-white animate-[rise_0.5s_ease_both]`}
        >
          <p className="text-lg leading-snug">{a.text}</p>
          {a.name && <p className="mt-1 text-sm text-white/60">{a.name}</p>}
        </div>
      ))}
    </div>
  );
}

function People({ state, answered }: { state: RoomState; answered: number }) {
  if (!state.people.length) {
    return <p className="text-center text-white/60 text-sm">nobody's here yet. share the code!</p>;
  }
  return (
    <div className="space-y-2">
      {!state.revealed && (
        <p className="text-center text-white/70 text-sm">{answered} of {state.people.length} answered</p>
      )}
      <div className="flex flex-wrap justify-center gap-1.5">
        {state.people.map(p => (
          <span
            key={p.pid}
            className={`rounded-full px-3 py-1 text-sm border transition-all
              ${p.answered && !state.revealed ? 'bg-white/30 border-white/40 text-white' : 'bg-white/5 border-white/15 text-white/70'}
              ${p.online ? '' : 'opacity-40'}`}
          >
            {p.answered && !state.revealed && '✓ '}{p.name}{p.pid === state.me.pid && ' (you)'}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---- host -------------------------------------------------------------------

function HostControls({ state, answered, send }: { state: RoomState; answered: number; send: (m: Record<string, unknown>) => void }) {
  const [filter, setFilter] = useState(state.filter || '');
  const next = () => send({ t: 'next', filter: filter || undefined });

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {!state.revealed ? (
        <>
          <button
            onClick={() => send({ t: 'anonymous', on: !state.anonymous })}
            className={`${pill} flex items-center gap-2 text-sm`}
            aria-pressed={state.anonymous}
          >
            {state.anonymous ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {state.anonymous ? 'anonymous' : 'names shown'}
          </button>
          <button onClick={() => send({ t: 'reveal' })} className={`${pill} font-medium bg-white/25`}>
            reveal {answered ? `${answered} ` : ''}answer{answered === 1 ? '' : 's'}
          </button>
          <button onClick={next} className="text-sm text-white/60 px-2 py-2 hover:text-white/90">skip</button>
        </>
      ) : (
        <>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            aria-label="Kind of question"
            className={`${glass} rounded-xl px-3 py-2.5 text-white text-sm outline-none [&>option]:text-black`}
          >
            {FILTERS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
          </select>
          <button onClick={next} className={`${pill} font-medium bg-white/25`}>next question →</button>
        </>
      )}
    </div>
  );
}

function Invite({ code, onClose }: { code: string; onClose: () => void }) {
  const link = roomLink(code);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked; the link is on screen to select by hand
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="glass-card w-full max-w-sm p-6 text-center text-white space-y-4 animate-[rise_0.3s_ease_both]"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-label="Invite people"
      >
        <p className="text-white/80">scan to join, or go to</p>
        <p className="text-sm text-white/70 break-all">{link.replace(/^https?:\/\//, '')}</p>
        <div className="mx-auto w-fit rounded-2xl bg-white p-3">
          <QRCodeSVG value={link} size={196} bgColor="#ffffff" fgColor="#1e1b3a" />
        </div>
        <p className="text-5xl tracking-[0.25em] font-['Space_Grotesk'] font-medium pl-[0.25em]">{code}</p>
        <div className="flex justify-center gap-2">
          <button onClick={copy} className={`${pill} flex items-center gap-2 text-sm`}>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'copied' : 'copy link'}
          </button>
          <button onClick={onClose} className={`${pill} text-sm bg-white/25`}>start</button>
        </div>
      </div>
    </div>
  );
}
