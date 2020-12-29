const positiveSum = require("./sumOfPositive");

describe("positiveSum", () => {
  it("Will sum a positive array together", () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
  });

  it("A negative array will return 0", () => {
    expect(positiveSum([-1, -2, -3, -4, -5])).toEqual(0);
  });
});
