const romanArabicDictionary = {
  M: [1000, 3],
  CM: [900, 1],
  D: [500, 1],
  CD: [400, 1],
  C: [100, 3],
  XC: [90, 1],
  L: [50, 1],
  XL: [40, 1],
  X: [10, 3],
  IX: [9, 1],
  V: [5, 1],
  IV: [4, 1],
  I: [1, 3],
};

const greatestRomanNumeral = 3999;
const lowestRomanNumeral = 1;

export const convertToRoman = (input) => {
  if (!input) {
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
    while (input >= arabic[0]) {
      result += roman;
      input -= arabic[0];
    }
  }
  return result;
};

export const convertToArabic = (input) => {
  if (!input) {
    return '';
  }
  if (!isNaN(input)) {
    return 'This input field seems to contain invalid characters...';
  }
  let result = 0;

  for (const [roman, arabic] of Object.entries(romanArabicDictionary)) {
    let counter = 0;
    while (input.substring(0, roman.length) === roman && input !== '') {
      if (counter === arabic[1]) {
        return 'Invalid roman numeral!';
      }
      input = input.substring(roman.length);
      result += arabic[0];
      counter++;
    }
  }

  if (input) {
    return 'This input field seems to contain invalid characters...';
  }

  return result;
};
