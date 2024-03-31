/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from https://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h contained in the set [0, 360] and
 * s, l are contained in the set [0, 100] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h The hue
 * @param   {number}  s The saturation
 * @param   {number}  l The lightness
 * @return  {Array}     The RGB representation
 */
export function hslToRgb(h: number, s: number, l: number): number[] {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };
  return [f(0), f(8), f(4)];
}
