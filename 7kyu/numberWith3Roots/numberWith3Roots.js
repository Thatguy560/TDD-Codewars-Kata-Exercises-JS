perfectRoots = (n) => {
  return Math.pow(n, 1 / 8) % 1 == 0;
};

module.exports = perfectRoots;
