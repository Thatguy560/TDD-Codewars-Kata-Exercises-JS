const minMax = require("./highestProfitWins");

describe("minMax", () => {
  it("Will return the max and minimum from the array", () => {
    expect(minMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
  });

  it("Will return two numbers if only one number is given", () => {
    expect(minMax([5])).toEqual([5, 5]);
  });
});
