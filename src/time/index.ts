export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function uts(date = new Date()) {
  return Math.round(date.getTime() / 1000);
}

export function utsj(date = new Date()) {
  return date.getTime();
}

export function timeHash({ date = new Date(), base = 36 } = {}) {
  return date.getTime().toString(base);
}

export type DayKey = object & {
  year: number;
  ordinal: number;
};

/**
 * A lightweight key for Luxon DateTime days
 *
 * @param {DateTimeObject} dateTime
 * @returns number
 */
export function dayKey(dateTime: DayKey) {
  return dateTime.year * 1e3 + dateTime.ordinal;
}

dayKey.resolve = function (key: number) {
  const year = (key / 1e3) | 0; // Slightly fastest floor
  const ordinal = key - year * 1e3;
  return { year, ordinal };
};

export type MonthKey = object & {
  year: number;
  month: number;
};

/**
 * A lightweight key for Luxon DateTime months
 *
 * @param {DateTime} dateTime
 * @returns number
 */
export function monthKey(dateTime: MonthKey) {
  return dateTime.year * 100 + dateTime.month;
}

monthKey.resolve = function (key: number) {
  const year = (key / 100) | 0; // Slightly fastest floor
  const month = key - year * 100;
  return { year, month };
};

export type DateKey = object & {
  year: number;
  month: number;
  day: number;
};

/**
 * A lightweight key for Luxon DateTime date
 *
 * @param {DateTime} dateTime
 * @returns number
 */
export function dateKey(dateTime: DateKey) {
  return dateTime.year * 1e4 + dateTime.month * 100 + dateTime.day;
}

dateKey.resolve = function (key: number) {
  const ym = (key / 100) | 0; // Slightly fastest floor
  const day = key - ym * 100;
  const year = (ym / 100) | 0; // Slightly fastest floor
  const month = ym - year * 100;
  return { year, month, day };
};

export type TimeKey = object & {
  hour: number;
  minute: number;
  second?: number;
};

/**
 * A lightweight key for Luxon DateTime hours + minutes
 *
 * @param {DateTime} dateTime
 * @returns number
 */
export function minuteKey(dateTime: TimeKey) {
  return dateTime.hour * 100 + dateTime.minute;
}

minuteKey.resolve = function (key: number) {
  const hour = (key / 100) | 0; // Slightly fastest floor
  const minute = key - hour * 100;
  return { hour, minute, second: 0 };
};

/**
 * A lightweight key for Luxon DateTime hours + minutes + seconds
 *
 * @param {DateTime} dateTime
 * @returns number
 */
export function timeKey(dateTime: TimeKey) {
  return dateTime.hour * 1e4 + dateTime.minute * 100 + dateTime.second!;
}

timeKey.resolve = function (key: number) {
  const hm = (key / 100) | 0; // Slightly fastest floor
  const second = key - hm * 100;
  const hour = (hm / 100) | 0;
  const minute = hm - hour * 100;
  return { hour, minute, second };
};

export function timeToMinutes(dateTime: TimeKey) {
  return dateTime.hour * 60 + dateTime.minute;
}

export function minutesToTime(minutes: number) {
  const hour = (minutes / 60) | 0; // Slightly fastest floor
  const minute = minutes % 60;
  return { hour, minute };
}
