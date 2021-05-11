shorterReverseLonger = (a, b) => {
  return a.length >= b.length
    ? b + [...a].reverse().join("") + b
    : a + [...b].reverse().join("") + a;
};

module.exports = shorterReverseLonger;
