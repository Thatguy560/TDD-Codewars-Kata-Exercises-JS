twistedSum = (n) => {
  let arr = Array.apply(null, Array(n + 1)).map((_, i) => {
    return i;
  });
  return arr
    .map((x) => +x)
    .join("")
    .split("")
    .map((x) => Number(x))
    .reduce((a, b) => a + b);
};

module.exports = twistedSum;
