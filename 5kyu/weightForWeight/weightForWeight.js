orderWeight = (str) => {
  const sumOfParts = (num) =>
    num.split("").reduce((acc, currentVal) => acc + +currentVal, 0);
  return str
    .split(" ")
    .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
    .join(" ");
};

module.exports = orderWeight;
