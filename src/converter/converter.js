const romanArabicDictionary = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const greatestRomanNumeral = 3999;
const lowestRomanNumeral = 1;

export const convertToRoman = (input) => {
  if (input === '') {
    return '';
  }
  if (isNaN(input)) {
    return 'This input field seems to contain invalid characters...';
  }
  if (input > greatestRomanNumeral) {
    return 'Greatest number we can form in Roman numerals is 3999!';
  }
  if (input < lowestRomanNumeral) {
    return 'Lowest number we can form in Roman numerals is 1!';
  }

  let result = '';
  input = parseInt(input);

  for (const [roman, arabic] of Object.entries(romanArabicDictionary)) {
    while (input >= arabic) {
      result += roman;
      input -= arabic;
    }
  }
  return result;
};

export const convertToArabic = (input) => {
  let originalInput = input;

  if (!input) {
    return '';
  }

  let result = 0;

  for (const [roman, arabic] of Object.entries(romanArabicDictionary)) {
    while (input.substring(0, roman.length) === roman && input !== '') {
      input = input.substring(roman.length);
      result += arabic;
    }
  }

  if (originalInput !== convertToRoman(result)) {
    return 'This is an invalid roman numeral!';
  }

  return result;
};
