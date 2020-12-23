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


