solution = (firstArr, secondArr) => {
  let arr = [];
  for (let i = 0; i <= firstArr.length - 1; i++) {
    arr.push(firstArr[i] - secondArr[i]);
  }
  return (
    arr.map((x) => Math.abs(x) ** 2).reduce((a, b) => a + b) / firstArr.length
  );
};

module.exports = solution;
