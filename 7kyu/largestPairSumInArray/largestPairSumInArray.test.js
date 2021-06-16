const largestPairSum = require("./largestPairSumInArray");

describe("largestPairSum", () => {
  it("Will take an array and sum the largest pair of numbers from the array", () => {
    expect(largestPairSum([99, 2, 2, 23, 19])).toEqual(122);
  });
});
