const DAY = 24 * 60 * 60 * 1000;

interface Local { year: number; month: number; day: number; hour: number; minute: number; weekday: string }

function localParts(ts: number, tz: string): Local {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: tz, year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', hourCycle: 'h23', weekday: 'short',
    }).formatToParts(ts).map(x => [x.type, x.value]),
  );
  return { year: +p.year, month: +p.month, day: +p.day, hour: +p.hour, minute: +p.minute, weekday: p.weekday };
}

/** How far ahead of UTC `tz` is at instant `ts`, in ms. */
function offset(ts: number, tz: string): number {
  const l = localParts(ts, tz);
  return Date.UTC(l.year, l.month - 1, l.day, l.hour, l.minute) - Math.floor(ts / 60000) * 60000;
}

/** UTC ms for a wall-clock time in `tz`. Re-checks the offset so DST switch days land right. */
function zonedToUtc(year: number, month: number, day: number, hour: number, minute: number, tz: string): number {
  const wall = Date.UTC(year, month - 1, day, hour, minute);
  const first = wall - offset(wall, tz);
  return wall - offset(first, tz);
}

export function isValidTimeZone(tz: string): boolean {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

/** Next weekday at hour:minute in `tz`, strictly after `after`. */
export function nextWeekdayAt(hour: number, minute: number, tz: string, after = Date.now()): number {
  for (let d = 0; d < 8; d++) {
    const l = localParts(after + d * DAY, tz);
    if (l.weekday === 'Sat' || l.weekday === 'Sun') continue;
    const at = zonedToUtc(l.year, l.month, l.day, hour, minute, tz);
    if (at > after) return at;
  }
  throw new Error(`no weekday found for ${tz}`);
}

/** "9am", "9:30am", "14:00", "14" → { hour, minute }. */
export function parseTime(s: string): { hour: number; minute: number } | null {
  const m = s.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/i);
  if (!m) return null;
  let hour = Number(m[1]);
  const minute = Number(m[2] || 0);
  const ampm = m[3]?.toLowerCase();
  if (ampm) {
    if (hour < 1 || hour > 12) return null;
    hour = (hour % 12) + (ampm === 'pm' ? 12 : 0);
  }
  return hour <= 23 && minute <= 59 ? { hour, minute } : null;
}

export function fmtTime(hour: number, minute: number): string {
  return `${hour % 12 || 12}${minute ? `:${String(minute).padStart(2, '0')}` : ''}${hour < 12 ? 'am' : 'pm'}`;
}
