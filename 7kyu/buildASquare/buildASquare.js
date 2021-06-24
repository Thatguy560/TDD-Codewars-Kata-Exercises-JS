generateShape = (i) => {
  let pluses = "+".repeat(i);
  return pluses + `\n${pluses}`.repeat(i - 1);
};

module.exports = generateShape;
