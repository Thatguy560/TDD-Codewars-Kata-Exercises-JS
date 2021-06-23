const recover = require("./DigitRecovery");

describe("recover", () => {
  it("Will take a string which can be randomly shuffled and calculate the number equivalent", () => {
    expect(recover("TWWTONE")).toEqual("21");
  });

  it("Will return 'No Digits Found' if can't find any digits in the string", () => {
    expect(recover("ZXY")).toEqual("No Digits Found");
  });
});
