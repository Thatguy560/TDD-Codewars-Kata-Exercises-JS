zeros = (n) => {
  let trailingZeros = 0;
  while (n > 0) {
    n = Math.floor(n / 5); // Math.floor() function returns the largest integer less than or equal to a given number.
    trailingZeros += n;
  }
  return trailingZeros;
};

module.exports = zeros;
