import { hslToRgb } from './color';

export function randomColor(): string {
  return (
    '#' + ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6)
  );
}

/**
 * Creates a HEX color based on random HUE value,
 * having the saturation and lightness to be at specific levels.
 *
 * @param   {number}  saturation The saturation [0-100]
 * @param   {number}  lightness The lightness [0-100]
 * @return  {Array}   The RGB representation
 */
export function randomHueColor(saturation: number, lightness: number): string {
  const [r, g, b] = hslToRgb(randomInt(0, 360), saturation, lightness);
  const hR = r.toString(16).padStart(2, '0');
  const hG = g.toString(16).padStart(2, '0');
  const hB = b.toString(16).padStart(2, '0');
  return `#${hR}${hG}${hB}`;
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

export function randomId(min: number = 1) {
  // Don't apply MSB so we can negate the result if needed
  return randomInt(min, 0x7fffffff);
}

export function randomId64(min: number = 1) {
  // Don't apply MSB so we can negate the result if needed
  return randomInt(min, 0x7fffffffffffffff);
}
