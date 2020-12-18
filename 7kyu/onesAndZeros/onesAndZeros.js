binaryArrayToNumber = (arr) =>
  arr.reduce((a, b) => {
    return (a << 1) | b;
  });

module.exports = binaryArrayToNumber;
