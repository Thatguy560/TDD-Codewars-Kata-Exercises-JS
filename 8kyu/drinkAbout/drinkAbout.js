peopleWithAgeDrink = (old) =>
  "drink " +
  (old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky");

module.exports = peopleWithAgeDrink;
