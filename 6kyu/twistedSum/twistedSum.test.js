const twistedSum = require("./twistedSum");

describe("twistedSum", () => {
  it("Will sum the digits from 1 to given number N (Both ends included)", () => {
    expect(twistedSum(12)).toEqual(51);
  });
});
