const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("Will find the index of the two values in the array that equal the target value", () => {
    expect(twoSum([1234, 5678, 9012], 14690)).toEqual([1, 2]);
  });
});
