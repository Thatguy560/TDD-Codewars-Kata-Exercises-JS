persistence = (num) => {
  let times = 0;
  num = num.toString();
  while (num.length > 1) {
    num = [...String(num)]
      .map(Number)
      .reduce((acc, val) => acc * val)
      .toString();
    times++;
  }
  return times;
};

module.exports = persistence;
