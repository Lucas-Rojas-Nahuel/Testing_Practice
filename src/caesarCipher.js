import { cipherLetter } from "./utils/cipherLetter.js";

export function caesarCipher(string, index) {
  const arrayLetter = string.trim().split("");
  let cipherString = "";
  arrayLetter.forEach((letter) => {
    if (letter === " ") {
      cipherString = cipherString + " ";
    } else if (/[^a-zA-ZñÑ]/.test(letter)) {
      cipherString = cipherString + letter;
    } else {
      cipherString = cipherString + cipherLetter(letter, index);
    }
  });

  return cipherString;
}
