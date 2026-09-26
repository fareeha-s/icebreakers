import { icebreakers, type Icebreaker } from '../../src/data/icebreakers';

export type { Icebreaker };

// Words people can type after /icebreaker to narrow the pool.
const FILTERS: Record<string, (ib: Icebreaker) => boolean> = {
  fun: ib => ib.category === 'fun',
  creative: ib => ib.category === 'creative',
  deep: ib => ib.category === 'introspective',
  introspective: ib => ib.category === 'introspective',
  quick: ib => ib.mode === 'popcorn',
  tech: ib => !!ib.tech,
};

export const FILTER_NAMES = ['fun', 'creative', 'deep', 'quick', 'tech'];

export function isFilter(word: string | undefined): word is string {
  return !!word && Object.hasOwn(FILTERS, word);
}

export function byId(id: string): Icebreaker | undefined {
  return icebreakers.find(ib => ib.id === id);
}

/** Random question matching `filter`, avoiding `exclude` ids until the pool runs dry. */
export function pick(filter?: string, exclude: string[] = []): Icebreaker {
  const pool = isFilter(filter) ? icebreakers.filter(FILTERS[filter]) : [...icebreakers];
  const fresh = pool.filter(ib => !exclude.includes(ib.id));
  const from = fresh.length ? fresh : pool;
  return from[Math.floor(Math.random() * from.length)];
}

export function label(ib: Icebreaker): string {
  const kind = ib.category === 'introspective' ? 'deep' : ib.category;
  const pace = ib.mode === 'popcorn' ? 'quick round' : 'take a minute';
  return `${kind} · ${pace}`;
}
