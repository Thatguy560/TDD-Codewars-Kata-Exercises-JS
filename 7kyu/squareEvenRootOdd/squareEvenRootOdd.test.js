const sumSquareEvenRootOdd = require("./squareEvenRootOdd");

describe("sumSquareEvenRootOdd", () => {
  it("Will square all the even numbers and root the odds", () => {
    expect(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0])).toEqual(91.61);
  });
});
