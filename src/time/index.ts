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
