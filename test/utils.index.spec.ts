import isHexColor from 'validator/lib/isHexColor';
import { randomColor } from '../src/utils';

describe('utils', () => {
  it('should validate randomColor', () => {
    expect(isHexColor(randomColor())).toBeTruthy();
  });
});
