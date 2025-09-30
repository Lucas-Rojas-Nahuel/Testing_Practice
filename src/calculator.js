export const calculator = {
  add: function (a, b) {
    a = Number(a);
    b = Number(b);

    if (Number.isNaN(a) || Number.isNaN(b)) return null;
    return a + b;
  },
  subtract: function (a, b) {
    a = Number(a);
    b = Number(b);

    if (Number.isNaN(a) || Number.isNaN(b)) return null;
    return a - b;
  },
  divide: function (a, b) {
    a = Number(a);
    b = Number(b);

    if (Number.isNaN(a) || Number.isNaN(b)) return null;

    if (a == 0) {
      return b;
    } else if (b == 0) {
      throw "No se puede dividir por cero";
    }

    return a / b;
  },
  multiply: function (a, b) {
    a = Number(a);
    b = Number(b);
    if (Number.isNaN(a) || Number.isNaN(b)) return null;

    return a * b;
  },
};
