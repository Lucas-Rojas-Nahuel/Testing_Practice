import { capitalize } from "../src/capitalize";

test("String normal", () => {
  expect(capitalize("pedro")).toBe("Pedro");
});

test("String ya capitalizado", () => {
  expect(capitalize("Pedro")).toBe("Pedro");
});

test("String en Mayúsculas", () => {
  expect(capitalize("PEDRO")).toBe("Pedro");
});

test("String vacío", () => {
  expect(capitalize("")).toBe("");
});

test("String con un solo carácter", () => {
  expect(capitalize("a")).toBe("A");
});

test("String con espacios adelante", () => {
  expect(capitalize(" pedro")).toBe("Pedro");
});

test("String con números o símbolos al inicio", () => {
  expect(capitalize("123pedro")).toBe("123pedro");
});
