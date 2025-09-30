export function reverseString(string) {
  if (string === "") return "";

  const arrayLetter = string.split("").reverse();
  let stringReverse = "";
  
  arrayLetter.forEach((letter) => {
    stringReverse = stringReverse + letter;
  });
  
  return stringReverse;
}
