import { analyzeArray } from "../src/analyzeArray";

test("Caso normal", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Arreglo con un solo numero", () => {
  expect(analyzeArray([5])).toStrictEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("Arreglo con numeros negativos", () => {
  expect(analyzeArray([-1, -5, -3])).toStrictEqual({
    average: -3,
    min: -5,
    max: -1,
    length: 3,
  });
});

test("Arreglo con una mezcla de numeros negativos y positivos", () => {
  expect(analyzeArray([-2, 0, 2, 4])).toStrictEqual({
    average: 1,
    min: -2,
    max: 4,
    length: 4,
  });
});

test("Arreglo vacío", () => {
  expect(analyzeArray([])).toBe(null);
});
