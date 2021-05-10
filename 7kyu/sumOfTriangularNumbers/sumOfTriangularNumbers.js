// Whilst looping through the number (less or equal to n), keep adding it to sum.
sumTriangularNumbers = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += (i * (i + 1)) / 2;
  }
  return sum;
};

module.exports = sumTriangularNumbers;
