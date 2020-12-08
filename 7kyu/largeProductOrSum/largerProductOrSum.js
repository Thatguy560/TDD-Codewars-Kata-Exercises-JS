sumOrProduct = (array, n) => {
  let maxNums = array
    .sort((a, b) => {
      return b - a;
    })
    .slice(0, n);
  let minNums = array
    .sort((a, b) => {
      return a - b;
    })
    .slice(0, n);
  let sum = maxNums.reduce((a, b) => a + b);
  let product = minNums.reduce((a, b) => a * b);
  if (sum > product) {
    return "sum";
  } else if (product > sum) {
    return "product";
  } else if (product == sum) {
    return "same";
  }
};

module.exports = sumOrProduct;
