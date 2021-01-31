export function randomColor(): string {
  return (
    '#' + ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6)
  );
}

// https://stackoverflow.com/a/1527820/1889685
export function randomInt(
  min: number,
  max: number,
  notEqual: number | null = null
) {
  let result;

  min = Math.ceil(min);
  max = Math.floor(max);

  do {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (notEqual !== null && result === notEqual);

  return result;
}

export function dice(max: number, min: number = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
