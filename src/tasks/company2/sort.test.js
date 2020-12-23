import '@testing-library/jest-dom/extend-expect';
import { sort } from './sort';

test('original', () => {
  expect(sort("а3 р4уки боя2тся, делаю5т Гл1аза" )).toEqual("Глаза боятся, а руки делают");
});
