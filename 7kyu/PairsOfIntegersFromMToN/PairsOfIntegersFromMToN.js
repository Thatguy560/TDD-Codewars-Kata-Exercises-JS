generatePairs = (m, n) => {
  let result = [];
  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result.push([i, j]);
    }
  }
  return result;
};

module.exports = generatePairs;
