const generatePairs = require("./PairsOfIntegersFromMToN");

describe("generatePairs", () => {
  it("Will take two numbers and generate a series of pairs until it reaches the values of n and m", () => {
    expect(generatePairs(2, 4)).toEqual([
      [2, 2],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 4],
      [4, 4],
    ]);
  });
});
