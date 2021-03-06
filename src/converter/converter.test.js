import { convertToArabic, convertToRoman } from './converter';

test('1 converts to I', () => {
  expect(convertToRoman(1)).toBe('I');
});

test('2 converts to II', () => {
  expect(convertToRoman(2)).toBe('II');
});

test('3 converts to III', () => {
  expect(convertToRoman(3)).toBe('III');
});

test('4 converts to IV', () => {
  expect(convertToRoman(4)).toBe('IV');
});

test('5 converts to V', () => {
  expect(convertToRoman(5)).toBe('V');
});

test('6 converts to VI', () => {
  expect(convertToRoman(6)).toBe('VI');
});
test('7 converts to VII', () => {
  expect(convertToRoman(7)).toBe('VII');
});

test('8 converts to VIII', () => {
  expect(convertToRoman(8)).toBe('VIII');
});

test('9 converts to IX', () => {
  expect(convertToRoman(9)).toBe('IX');
});

test('1000 converts to M', () => {
  expect(convertToRoman(1000)).toBe('M');
});

test('3000 converts to MMM', () => {
  expect(convertToRoman(3000)).toBe('MMM');
});

test('1007 converts to MVII', () => {
  expect(convertToRoman(1007)).toBe('MVII');
});

test('2847 converts to MMDCCCXLVII', () => {
  expect(convertToRoman(2847)).toBe('MMDCCCXLVII');
});

test('950 converts to CML', () => {
  expect(convertToRoman(950)).toBe('CML');
});

test('return empty string on empty input', () => {
  expect(convertToRoman('')).toBe('');
});

test('I converts to 1', () => {
  expect(convertToArabic('I')).toBe(1);
});

test('II converts to 2', () => {
  expect(convertToArabic('II')).toBe(2);
});

test('III converts to 3', () => {
  expect(convertToArabic('III')).toBe(3);
});

test('MMDCCCXLVII converts to 2847', () => {
  expect(convertToArabic('MMDCCCXLVII')).toBe(2847);
});

test('CML converts to 950', () => {
  expect(convertToArabic('CML')).toBe(950);
});

test('CMLL is an invalid roman numeral', () => {
  expect(convertToArabic('CMLL')).toBe('This is an invalid roman numeral!');
});

test('11 is an invalid roman numeral', () => {
  expect(convertToArabic('11')).toBe('This is an invalid roman numeral!');
});

test('4000 cannot be converted to roman', () => {
  expect(convertToRoman(4000)).toBe(
    'Greatest number we can form in Roman numerals is 3999!'
  );
});

test('0 cannot be converted to roman', () => {
  expect(convertToRoman(0)).toBe(
    'Lowest number we can form in Roman numerals is 1!'
  );
});
