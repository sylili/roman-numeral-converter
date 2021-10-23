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

export const convertToRoman = (input) => {
  if (!input) {
    return '';
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
