squareOrSquareRoot = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    Math.sqrt(arr[i]) % 1 == 0
      ? result.push(Math.sqrt(arr[i]))
      : result.push(arr[i] ** 2);
  }
  return result;
};

module.exports = squareOrSquareRoot;
