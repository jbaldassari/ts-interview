import {closestToZero} from './interview';

describe('interview', () => {
  it('findsClosestToZero', async () => {
    expect(closestToZero()).toBeUndefined();
    expect(closestToZero(0)).toBe(0);
    expect(closestToZero(-1, 1)).toBe(1);
    expect(closestToZero(1, -1)).toBe(1);
    expect(closestToZero(1, 2)).toBe(1);
    expect(closestToZero(2, 1)).toBe(1);
    expect(closestToZero(-1, -2)).toBe(-1);
    expect(closestToZero(-2, -1)).toBe(-1);
    expect(closestToZero(-1, 0, 1)).toBe(0);
    expect(closestToZero(1, 0, -1)).toBe(0);
  });
});
