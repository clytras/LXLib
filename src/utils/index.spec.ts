import isHexColor from 'validator/lib/isHexColor';
import { randomColor } from '.';

describe('utils', () => {
  it('should validate randomColor', () => {
    expect(isHexColor(randomColor())).toBeTruthy();
  });
});
