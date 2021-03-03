evenLast = (arr) => {
  let result = [];
  arr.map((x, i) => {
    if (i % 2 == 0) {
      result.push(x);
    }
  });
  return result.reduce((a, b) => a + b, 0) * arr[arr.length - 1] || 0;
};

module.exports = evenLast;
