isVow = (a) => {
  return a
    .map((x) =>
      String(x)
        .replace("97", "a")
        .replace("101", "e")
        .replace("105", "i")
        .replace("111", "o")
        .replace("117", "u")
    )
    .map((x) => (isNaN(x) ? x : +x));
};

module.exports = isVow;
