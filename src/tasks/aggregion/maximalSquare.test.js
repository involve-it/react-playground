import '@testing-library/jest-dom/extend-expect';
import { maximalSquare } from './maximalSquare';

test('0 dims matrix', () => {
  expect(maximalSquare([[]])).toBe(0);
  expect(maximalSquare([])).toBe(0);
});

test('1 dims matrix', () => {
  expect(maximalSquare([['1']])).toBe(1);
});

test('2 dims matrix', () => {
  expect(maximalSquare([
    ['1', '0'],
    ['1', '0']
  ])).toBe(1);
});

test('5 dims matrix', () => {
  expect(maximalSquare([
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
    ['1', '0', '0', '1', '0']
  ])).toBe(9);
});
