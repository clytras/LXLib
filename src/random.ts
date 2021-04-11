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

export function randomIntNotIn(min: number, max: number, notIn?: number[]) {
  let result;

  min = Math.ceil(min);
  max = Math.floor(max);

  do {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (notIn && notIn.indexOf(result) >= 0);

  return result;
}

interface RandomIndexOptions {
  startFrom?: number;
  inclusive?: boolean;
}

export function randomIndex(
  length: number,
  { startFrom = 0, inclusive = false }: RandomIndexOptions = {}
) {
  const min = Math.ceil(startFrom);
  const max = Math.floor(length - (inclusive ? 0 : 1));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function dice(max: number, min: number = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
