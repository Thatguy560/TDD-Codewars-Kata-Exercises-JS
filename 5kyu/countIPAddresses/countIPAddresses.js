ipsBetween = (start, end) => {
  const num = (ip) =>
    ip
      .split(".")
      .map((x) => parseInt(x))
      .reduce((acc, currentVal) => acc * 256 + currentVal);
  return num(end) - num(start);
};

module.exports = ipsBetween;
