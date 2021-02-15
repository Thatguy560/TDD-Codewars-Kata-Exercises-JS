findScreenHeight = (width, ratio) => {
  const ratioNumber = ratio.split(":").map((x) => +x);
  const height = width * (ratioNumber[1] / ratioNumber[0]);
  return `${width}x${height}`;
};

module.exports = findScreenHeight;
