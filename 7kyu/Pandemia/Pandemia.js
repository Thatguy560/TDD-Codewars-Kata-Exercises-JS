infected = (s) => {
  const sumOfPeople = s
    .split("X")
    .map((x) => x.length)
    .reduce((a, b) => a + b);
  const infected = s
    .split("X")
    .filter((x) => x > 0)
    .map((x) => x.length)
    .reduce((a, b) => a + b, 0);
  return [...s].filter((x) => x !== "X").length == 0
    ? 0
    : (infected * 100) / sumOfPeople;
};

module.exports = infected;
