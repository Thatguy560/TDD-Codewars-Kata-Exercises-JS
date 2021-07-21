const calculate = require("./basicCalculator");

describe("calculate", () => {
  it("Will calculate the value between two values based on an operator", () => {
    expect(calculate(3.2, "-", 8)).toEqual(-4.8);
  });

  it("Will return null if calculation isn't valid.", () => {
    expect(calculate(3.2, "xx", 0)).toEqual(null);
  });
});
