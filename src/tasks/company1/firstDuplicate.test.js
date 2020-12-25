import '@testing-library/jest-dom/extend-expect';
import { firstDuplicate } from './firstDuplicate';

test('original', () => {
  expect(firstDuplicate([2, 1, 3, 5, 3, 2])).toEqual(3);
  expect(firstDuplicate([2, 2])).toEqual(2);
  expect(firstDuplicate([2, 4, 3, 5, 1])).toEqual(-1);
});
test('original-2', () => {
  expect(firstDuplicate([1])).toEqual(-1);
  expect(firstDuplicate([ 5,
    5,
    5,
    5,
    5])).toEqual(5);

  expect(firstDuplicate([2,
    1])).toEqual(-1);

  expect(firstDuplicate([
    2,
    1,
    3
  ])).toEqual(-1);

  expect(firstDuplicate([
    2,
    3,
    3
  ])).toEqual(3);

  expect(firstDuplicate([
    3,
    3,
    3
  ])).toEqual(3);

  expect(firstDuplicate([
    8,
    4,
    6,
    2,
    6,
    4,
    7,
    9,
    5,
    8
  ])).toEqual(6);

  expect(firstDuplicate([
    10,
    6,
    8,
    4,
    9,
    1,
    7,
    2,
    5,
    3
  ])).toEqual(-1);

  expect(firstDuplicate([
    1,
    1,
    2,
    2,
    1
  ])).toEqual(1);
});
