import '@testing-library/jest-dom/extend-expect';
import { takeMyMoney } from './takeMyMoney';

test('trivial', () => {
  expect(takeMyMoney([])).toEqual(0);
});

test('zero', () => {
  expect(takeMyMoney([350, 250, 100, 1600, 500, 150, 150], 20, 1672)).toEqual(0);
});

test('original', () => {
  expect(takeMyMoney([350, 250, 100, 1600, 500, 150, 150], 2, 1672)).toEqual(850);
});
