const zeros = require("./numberOfTrailingZerosOfN");

describe("zeros", () => {
  it("Will calculate the number of trailing zeros in a given factorial number", () => {
    expect(zeros(12)).toEqual(2);
  });
});
