largestPairSum = (numbers) => {
  return numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((a, b) => a + b);
};

module.exports = largestPairSum;
