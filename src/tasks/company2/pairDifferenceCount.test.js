import '@testing-library/jest-dom/extend-expect';
import { pairDifferenceCount } from './pairDifferenceCount';

test('original', () => {
  expect(pairDifferenceCount([1, 5, 3, 4, 2, 2] )).toEqual(2);
});
