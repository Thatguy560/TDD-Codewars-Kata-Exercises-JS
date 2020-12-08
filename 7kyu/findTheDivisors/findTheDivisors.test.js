const divisors = require("./findTheDivisors");

describe("divisors", () => {
  it("will return the prime number if prime", () => {
    expect(divisors(13)).toEqual("13 is prime");
  });

  it("will return an array of non prime numbers", () => {
    expect(divisors(12)).toEqual([2, 3, 4, 6]);
  });
});
