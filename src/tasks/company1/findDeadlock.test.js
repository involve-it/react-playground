import '@testing-library/jest-dom/extend-expect';
import { findDeadlock } from './findDeadlock';

test('trivial-1', () => {
  expect(findDeadlock([ [1], [2], [0] ])).toEqual(true);
});

test('trivial-2', () => {
  expect(findDeadlock([ [1, 2], [2], [] ])).toEqual(false);
});

test('original-1', () => {
  expect(findDeadlock([[1], [2], [3, 4], [4], [0]])).toEqual(true);
});

test('original-2', () => {
  expect(findDeadlock([[1, 2, 3], [2, 3], [3], []])).toEqual(false);
});

test('original-3', () => {
 expect(findDeadlock(
    [[1], [2], [3, 4], [4], [0]])
  ).toEqual(true);

  expect(findDeadlock(
    [[1, 2, 3], [2, 3], [3], []]
    )
  ).toEqual(false);

  expect(findDeadlock(
    [[1, 6], [2], [3], [4], [5], [6], [3]]
    )
  ).toEqual(true);

  expect(findDeadlock(
    [[1, 4, 3], [], [1, 4, 3], [1], [3]]
    )
  ).toEqual(false);


  expect(findDeadlock(
    [[1, 2], [2, 3], [3, 4], [4, 5], [5], []]
    )
  ).toEqual(false);

  expect(findDeadlock(
    [[1, 2], [2], [], [4], [3]]
    )
  ).toEqual(true);

  expect(findDeadlock(
    [[2], [0, 2], [], [4, 2], [2, 3]]
    )
  ).toEqual(true);

  expect(findDeadlock(
    [[2, 3, 5], [0, 2, 5, 4, 3], [3], [5], [3, 5], []]
    )
  ).toEqual(false);

  expect(findDeadlock(
    [
      [],
      [0, 2],
      [4, 0],
      [0],
      [0, 3],
      [3],
      [7],
      [5],
      [7, 6],
      [8, 11],
      [9],
      [10],
    ]
    )
  ).toEqual(true);

  expect(findDeadlock(
    [[]]
    )
  ).toEqual(false);
});

