const mygcd = require("./greatestCommonDivisor");

describe("mygcd", () => {
  it("Will return the greatest common divisor from two numbers", () => {
    expect(mygcd(30, 12)).toEqual(6);
  });
});
