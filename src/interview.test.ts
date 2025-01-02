import {solution} from './interview';

describe('interview', () => {
  it('tests solution', () => {
    expect(solution()).toBeUndefined();
    expect(solution(0)).toBe(0);
    expect(solution(0, 1)).toBe(0);
  });
});
