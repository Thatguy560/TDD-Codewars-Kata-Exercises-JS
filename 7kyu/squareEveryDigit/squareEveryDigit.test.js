const squareDigits = require("./squareEveryDigit");

describe("squareDigits", () => {
  it("Will square every number in the digit", () => {
    expect(squareDigits(9119)).toEqual(811181);
  });
});
