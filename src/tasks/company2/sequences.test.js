import '@testing-library/jest-dom/extend-expect';
import { sequences } from './sequences';

test('original', () => {
  expect(sequences(4 )).toEqual(expect.arrayContaining([
    '1',
    '2-1',
    '1-2-3',
    '4-3-2-1',
  ]));
});
