minMax = (arr) => {
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);
  return arr.length == 1 ? [...arr, ...arr] : [min, max];
};

module.exports = minMax;
