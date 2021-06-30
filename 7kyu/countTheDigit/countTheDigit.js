nbDig = (n, d) => {
  let allNumbers = [...Array(n + 1).keys()];
  let squared = allNumbers.map((i) => {
    return i ** 2;
  });
  return squared
    .join("")
    .split("")
    .filter((i) => {
      return i == d;
    }).length;
};

module.exports = nbDig;
