const findOdd = require("./findTheOddInt");

describe("findOdd", () => {
  it("Will return the odd number from a list of numbers", () => {
    expect(
      findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
    ).toEqual(5);
  });
});
