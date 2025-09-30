export function analyzeArray(array) {
  if (array.length == 0) return null;

  const average = array.reduce((acc, num) => acc + num, 0) / array.length;

  const min = array.reduce((acc, num) => {
    return acc > num ? num : acc;
  });

  const max = array.reduce((acc, num) => {
    return acc < num ? num : acc;
  });

  return {
    average: average,
    min: min,
    max: max,
    length: array.length,
  };
}
