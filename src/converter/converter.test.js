import { convertToRoman } from './converter';

test('1 converts to I', () => {
  expect(convertToRoman(1)).toBe('I');
});
