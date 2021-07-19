matrixAddition = (a, b) => {
  let result = [],
    groups = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      result.push(a[i][j] + b[i][j]);
    }
  }
  for (let i = 0; i < result.length; i += a.length) {
    groups.push(result.slice(i, i + a.length));
  }
  return groups;
};

module.exports = matrixAddition;
