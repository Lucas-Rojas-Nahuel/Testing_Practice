import { reverseString } from "../src/reverseString";

test("String normal", () => {
  expect(reverseString("pedro")).toBe("ordep");
});

test("String con Mayúsculas y Minúsculas", () => {
  expect(reverseString("Pedro")).toBe("ordeP");
});

test("String vacío", () => {
  expect(reverseString("")).toBe("");
});

test("String de un solo carácter", () => {
  expect(reverseString("p")).toBe("p");
});


test("String numérico", () => {
  expect(reverseString("12345")).toBe("54321");
});

test("String con espacios", () => {
  expect(reverseString("hola mundo")).toBe("odnum aloh");
});

test("String con símbolos", () => {
  expect(reverseString("!abc?")).toBe("?cba!");
});