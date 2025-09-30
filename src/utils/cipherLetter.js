import { reorderAlphabetByIndex } from "./reorderAlphabetByIndex.js";

export function cipherLetter(letter, index) {
  const reorderAlphabet = reorderAlphabetByIndex(index);
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

  let encryptChar = "";

  for (let i = 0; i < Alphabet.length; i++) {
    if (letter.toLowerCase() == Alphabet[i]) {
      if (letter === letter.toLowerCase()) {
        encryptChar = reorderAlphabet[i];
      } else {
        encryptChar = reorderAlphabet[i].toUpperCase();
      }
    }
  }

  return encryptChar;
}
