import { ApiError } from './validation.mjs';

// Standard Gemini price verified 2026-10-04: $0.30 input / $2.50 output per million.
// Integer nanodollars and a 20% reserve; output includes thinking tokens.
export function monthlyLimit(value = '1') {
  if (!/^\d{1,3}(\.\d{1,6})?$/.test(String(value)) || Number(value) > 100) throw new Error('Invalid monthly budget');
  return Math.round(Number(value) * 1e6) * 1000;
}
export function reserveBudget(data, config, input, output, day) {
  if (config.model !== 'gemini-3.5-flash-lite') throw new ApiError(503,'Pro tento model není nastaven bezpečný cenový limit.');
  for (const key of ['tokens','calls']) if (!Number.isSafeInteger(data[key]) || data[key] < 0) throw new Error('Invalid usage budget');
  const month = day.slice(0,7);
  // Upgrade legacy counters conservatively; old counters contain only the last recorded day.
  let spent = data.month === undefined && data.day.startsWith(month) ? data.tokens * 3000 : data.reservedNanoUsd ?? 0;
  if (!Number.isSafeInteger(spent) || spent < 0 || (data.month !== undefined && (typeof data.month !== 'string' || data.reservedNanoUsd === undefined))) throw new Error('Invalid monthly usage');
  if (data.month !== undefined && data.month !== month) spent = 0;
  const cost = input * 360 + output * 3000;
  if (spent + cost > config.monthlyNanoUsd) throw new ApiError(429,'Měsíční limit AI je vyčerpaný. Můžete poslat zprávu přímo Petrovi.');
  const tokens = data.day === day ? data.tokens : 0;
  const calls = data.day === day ? data.calls : 0;
  if (calls >= config.dailyCalls || tokens + input + output > config.dailyTokens) throw new ApiError(429,'Denní limit AI je vyčerpaný. Můžete poslat zprávu přímo Petrovi.');
  return {day, tokens:tokens + input + output, calls:calls + 1, month, reservedNanoUsd:spent + cost};
}
