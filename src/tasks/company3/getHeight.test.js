import '@testing-library/jest-dom/extend-expect';
import { getHeight } from './getHeight';

test('trivial', () => {
  expect(getHeight([1, 1])).toEqual(1);
});

test('zero', () => {
  expect(getHeight([1, 2])).toEqual(0);
});

test('original', () => {
  expect(getHeight([1,2,3,6])).toEqual(6);
  expect(getHeight([1, 2, 3, 4, 5, 6])).toEqual(10);
});
