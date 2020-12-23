import '@testing-library/jest-dom/extend-expect';
import { firstDuplicate } from './firstDuplicate';

test('original', () => {
  expect(firstDuplicate([2, 1, 3, 5, 3, 2])).toEqual(3);
  expect(firstDuplicate([2, 2])).toEqual(2);
  expect(firstDuplicate([2, 4, 3, 5, 1])).toEqual(-1);
});
