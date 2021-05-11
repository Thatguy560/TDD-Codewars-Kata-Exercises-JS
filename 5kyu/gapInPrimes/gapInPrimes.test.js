const gap = require("./gapInPrimes");

describe("gap", () => {
  it("Will work out the gap in primes based on a range between two given numbers", () => {
    expect(gap(10, 300, 400)).toEqual([337, 347]);
  });

  it("If there's no gap in primes then return null", () => {
    expect(gap(6, 100, 110)).toEqual(null);
  });
});
