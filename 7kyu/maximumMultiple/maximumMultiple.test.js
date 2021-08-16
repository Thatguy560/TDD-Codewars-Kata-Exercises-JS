const maxMultiple = require("./maximumMultiple");

describe("maxMultiple", () => {
  it("Will return the maximum multiple from a divisor and a bound", () => {
    expect(maxMultiple(37, 200)).toEqual(185);
  });
});
