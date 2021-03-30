const squareOrSquareRoot = require("./toSquareOrNotToSquare");

describe("squareOrSquareRoot", () => {
  it("if number has a square root than square root that number otherwise square the number", () => {
    expect(squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toEqual([2, 9, 3, 49, 4, 1]);
  });
});
