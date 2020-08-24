import { countEachElement } from './utils';

describe('utils', () => {
  describe('countEachElement', () => {
    it('returns tuple of each element in the given array and its total', () => {
      const results = countEachElement(['x', 'y', 'x']);

      expect(results).toEqual([['x', 2], ['y', 1]]);
    });

    it('supports empty array', () => {
      const results = countEachElement([]);

      expect(results).toEqual([]);
    });
  });
});
