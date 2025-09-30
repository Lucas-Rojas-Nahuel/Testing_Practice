export function capitalize(string) {
  if (string === "") return "";
  const firstCharacter = string.trim()[0].toUpperCase().trim();
  return firstCharacter + string.trim().slice(1).toLowerCase();
}
