const calc = require("./CharCodeCalculation");

describe("calc", () => {
  it("Will calculate the difference in digits between 7 and 1 from a string", () => {
    expect(calc("ABC")).toEqual(6);
  });
});
