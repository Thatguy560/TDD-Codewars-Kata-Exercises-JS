const sequenceSum = require("./SumOfNumbersFrom0ToN");

describe("sequenceSum", () => {
  it("Will sum numbers from 0 to N", () => {
    expect(sequenceSum(6)).toEqual("0+1+2+3+4+5+6 = 21");
  });

  it("Will will also work with negative numbers", () => {
    expect(sequenceSum(-15)).toEqual("-15<0");
  });

  it("Will will also work with 0", () => {
    expect(sequenceSum(0)).toEqual("0=0");
  });
});
