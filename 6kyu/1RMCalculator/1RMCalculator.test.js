const calculate1RM = require("./1RMCalculator");

describe("calculate1RM", () => {
  it("Will return 0 if number of reps is 0", () => {
    expect(calculate1RM(400, 0)).toEqual(0);
  });

  it("Will return the max value from the 3 formulas", () => {
    expect(calculate1RM(135, 20)).toEqual(282);
  });
});
