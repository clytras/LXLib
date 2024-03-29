import {
  sleep,
  uts,
  utsj,
  timeHash,
  dayKey,
  monthKey,
  dateKey,
  minuteKey,
  timeKey,
  timeToMinutes,
  minutesToTime,
} from '../src/time';
import type { DayKey, MonthKey, DateKey, TimeKey } from '../src/time';

describe('time', () => {
  it('should sleep', async () => {
    for (let advance = 5; advance < 50; advance += 5) {
      let start = new Date().getTime();
      // add 5 because there are cases that we get 1 ms lower than the advance time
      await sleep(advance + 5);
      let duration = new Date().getTime() - start;
      expect(duration).toBeGreaterThanOrEqual(advance);
    }
  });

  it('should validate unix time stamp (seconds)', () => {
    const value = uts().toString();
    expect(value).toMatch(/^\d{10}$/);
  });

  it('should validate js unix time stamp (milliseconds)', () => {
    const value = utsj().toString();
    expect(value).toMatch(/^\d{13}$/);
  });

  it('should create valid time hashes', () => {
    const date = new Date();
    for (let base = 2; base <= 36; base++) {
      const expected = date.getTime().toString(base);
      expect(timeHash({ date, base })).toStrictEqual(expected);
    }
  });

  it('should validate day keys', () => {
    const values: [DayKey, number][] = [
      [{ year: 1821, ordinal: 111 }, 1821111],
      [{ year: 2021, ordinal: 222 }, 2021222],
      [{ year: 1999, ordinal: 365 }, 1999365],
    ];

    for (const [o, k] of values) {
      const key = dayKey(o);
      expect(key).toBe(k);

      const resolved = dayKey.resolve(key);
      expect(resolved).toMatchObject(o);
    }
  });

  it('should validate month keys', () => {
    const values: [MonthKey, number][] = [
      [{ year: 2022, month: 6 }, 202206],
      [{ year: 1821, month: 3 }, 182103],
      [{ year: 1999, month: 10 }, 199910],
    ];

    for (const [o, k] of values) {
      const key = monthKey(o);
      expect(key).toBe(k);

      const resolved = monthKey.resolve(key);
      expect(resolved).toMatchObject(o);
    }
  });

  it('should validate date keys', () => {
    const values: [DateKey, number][] = [
      [{ year: 1999, month: 7, day: 1 }, 19990701],
      [{ year: 1821, month: 3, day: 25 }, 18210325],
      [{ year: 1982, month: 7, day: 1 }, 19820701],
    ];

    for (const [o, k] of values) {
      const key = dateKey(o);
      expect(key).toBe(k);

      const resolved = dateKey.resolve(key);
      expect(resolved).toMatchObject(o);
    }
  });

  it('should validate minute keys', () => {
    const values: [TimeKey, number][] = [
      [{ hour: 23, minute: 0 }, 2300],
      [{ hour: 0, minute: 59 }, 59],
      [{ hour: 1, minute: 1 }, 101],
      [{ hour: 19, minute: 19 }, 1919],
    ];

    for (const [o, k] of values) {
      const key = minuteKey(o);
      expect(key).toBe(k);

      const resolved = minuteKey.resolve(key);
      expect(resolved).toMatchObject(o);
    }
  });

  it('should validate time keys', () => {
    const values: [TimeKey, number][] = [
      [{ hour: 23, minute: 0, second: 0 }, 230000],
      [{ hour: 0, minute: 0, second: 59 }, 59],
      [{ hour: 1, minute: 1, second: 1 }, 10101],
      [{ hour: 19, minute: 19, second: 19 }, 191919],
    ];

    for (const [o, k] of values) {
      const key = timeKey(o);
      expect(key).toBe(k);

      const resolved = timeKey.resolve(key);
      expect(resolved).toMatchObject(o);
    }
  });

  it('should convert time to minutes', () => {
    const values: [TimeKey, number][] = [
      [{ hour: 23, minute: 0 }, 1380],
      [{ hour: 0, minute: 59 }, 59],
      [{ hour: 1, minute: 1 }, 61],
      [{ hour: 19, minute: 19 }, 1159],
    ];

    for (const [o, k] of values) {
      const minutes = timeToMinutes(o);
      expect(minutes).toBe(k);

      const time = minutesToTime(minutes);
      expect(time).toMatchObject(o);
    }
  });
});
