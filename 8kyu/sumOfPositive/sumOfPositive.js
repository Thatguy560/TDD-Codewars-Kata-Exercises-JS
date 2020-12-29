positiveSum = (arr) => arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);

module.exports = positiveSum;
