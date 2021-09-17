prevMultOfThree = (n) => {
  while (n % 3 !== 0) {
    n = String(n).slice(0, -1);
  }
  return n === "" ? null : +n;
};

module.exports = prevMultOfThree;
