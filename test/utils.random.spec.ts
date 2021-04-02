import isHexColor from 'validator/lib/isHexColor';
import { randomColor, randomInt, randomIndex, dice } from '../src/random';

describe('utils', () => {
  it('should validate randomColor', () => {
    expect(isHexColor(randomColor())).toBeTruthy();
  });

  it('should generate random int in range', () => {
    for (let loops = 0; loops < 100; loops++) {
      const n1 = randomInt(-100, 100);
      expect(n1).toBeGreaterThanOrEqual(-100);
      expect(n1).toBeLessThanOrEqual(100);

      const rnd = randomInt(1, 10);
      const n2 = randomInt(1, 10, rnd);
      expect(n2).toBeGreaterThanOrEqual(1);
      expect(n2).toBeLessThanOrEqual(10);
      expect(n2).not.toStrictEqual(rnd);
    }
  });

  it('should generate random index in range', () => {
    for (let loops = 0; loops < 100; loops++) {
      const n1 = randomIndex(5);
      expect(n1).toBeGreaterThanOrEqual(0);
      expect(n1).toBeLessThan(5);

      const n2 = randomIndex(5, { inclusive: true });
      expect(n2).toBeGreaterThanOrEqual(0);
      expect(n2).toBeLessThanOrEqual(5);

      const n3 = randomIndex(5, { startFrom: 2 });
      expect(n3).toBeGreaterThanOrEqual(2);
      expect(n3).toBeLessThan(5);

      const n4 = randomIndex(5, { startFrom: 2, inclusive: true });
      expect(n4).toBeGreaterThanOrEqual(2);
      expect(n4).toBeLessThanOrEqual(5);
    }
  });

  it('should generate dice range', () => {
    for (let loops = 0; loops < 100; loops++) {
      const n1 = dice(6);
      expect(n1).toBeGreaterThanOrEqual(1);
      expect(n1).toBeLessThanOrEqual(6);

      const n2 = dice(100, -100);
      expect(n2).toBeGreaterThanOrEqual(-100);
      expect(n2).toBeLessThanOrEqual(100);
    }
  });
});
