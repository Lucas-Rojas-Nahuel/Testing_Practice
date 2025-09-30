import { calculator } from "../src/calculator";

//test de suma
test("suma de dos numero", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("suma de numero negativos y numeros positivos", () => {
  expect(calculator.add(-2, 3)).toBe(1);
});

test("suma de string y numeros", () => {
  expect(calculator.add(-2, "3")).toBe(1);
});

test("suma de string y numeros", () => {
  expect(calculator.add(-2, "3sd")).toBe(null);
});

 //test de resta
test("resta de dos numeros", () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});

test("resta de dos numeros", () => {
  expect(calculator.subtract(3, 10)).toBe(-7);
});

test("resta de dos numeros", () => {
  expect(calculator.subtract(-3, -10)).toBe(7);
});

test("resta de numeros con string", () => {
  expect(calculator.subtract(3, "10")).toBe(-7);
});

test("resta de numeros con string invalidos ", () => {
  expect(calculator.subtract(3, "10asv")).toBe(null);
});

//test de multiplicación
test("multiplicación de dos numeros", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("multiplicación de dos numeros", () => {
  expect(calculator.multiply(-2, 2)).toBe(-4);
});

test("multiplicación de dos numeros", () => {
  expect(calculator.multiply(-2, -2)).toBe(4);
});

test("multiplicación de numeros con string", () => {
  expect(calculator.multiply(2, "2")).toBe(4);
});

test("multiplicación de numeros con string invalidos ", () => {
  expect(calculator.multiply(3, "10asv")).toBe(null);
});

//test de divición
test("divición de dos numeros", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("divición de dos numeros", () => {
  expect(calculator.divide(-4, 2)).toBe(-2);
});

test("divición de dos numeros", () => {
  expect(calculator.divide(-4, -2)).toBe(2);
});

test("divición de numeros con string", () => {
  expect(calculator.divide(4, "2")).toBe(2);
});

test("divición de numeros con string invalidos ", () => {
  expect(calculator.divide(3, "10asv")).toBe(null);
});

test("divición por 0 ", () => {
  expect(() => calculator.divide(10, 0)).toThrow(
    "No se puede dividir por cero"
  );
});
 