let maxSequence = require("./maximumSubarraySum");

describe("maxSequence", () => {
  it("Will loop through an array and find the greatest subarray within", () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });
});
