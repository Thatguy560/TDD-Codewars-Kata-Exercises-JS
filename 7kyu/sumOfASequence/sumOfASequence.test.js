const sequenceSum = require("./sumOfASequence");

describe("sequenceSum", () => {
  it("Will work out the sum of a sequence", () => {
    expect(sequenceSum(1, 5, 1)).toEqual(15);
  });
});
