squareDigits = (num) =>
  Number(
    num
      .toString()
      .split("")
      .map((x) => Math.pow(x, 2))
      .join("")
  );

module.exports = squareDigits;
