import { caesarCipher } from "../src/caesarCipher";

test("Desplazamiento básico positivo", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Desplazamiento mayor que el alfabeto (ciclo)", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Mantener mayúsculas y minúsculas", () => {
  expect(caesarCipher("AbC", 2)).toBe("CdE");
});

test("Conserva espacios y signos de puntuación", () => {
  expect(caesarCipher("hola, mundo!", 3)).toBe("krod, pxqgr!");
});

test("Desplazamiento negativo (hacia atrás)", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Desplazamiento de 0 (sin cambios)", () => {
  expect(caesarCipher("texto", 0)).toBe("texto");
});

test("Soporta strings con números y símbolos (sin cambio en ellos)", () => {
  expect(caesarCipher("abc123", 2)).toBe("cde123");
});
