digitalRoot = (n) => {
  while (n.toString().length > 1) {
    n = n
      .toString()
      .split("")
      .map((x) => +x)
      .reduce((a, b) => a + b);
  }
  return n;
};

module.exports = digitalRoot;
