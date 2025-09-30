export function reorderAlphabetByIndex(index) {
  const Alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",

    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const ModifiedAlphabet = [];
  const leftoverAlphabet = [];
  for (let i = 0; i < Alphabet.length; i++) {
    if (index > 0) {
      if (i >= index) {
        ModifiedAlphabet.push(Alphabet[i]);
      } else {
        leftoverAlphabet.push(Alphabet[i]);
      }
    } else if (index < 0) {
      if (i >= Alphabet.length - Math.abs(index)) {
        ModifiedAlphabet.push(Alphabet[i]);
      } else {
        leftoverAlphabet.push(Alphabet[i]);
      }
    } else if (index === 0) {
      return Alphabet;
    }
  }
  return ModifiedAlphabet.concat(leftoverAlphabet);
}
