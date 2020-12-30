const findNextSquare = require("./nextPerfectSquare");

describe("findNextSquare", () => {
  it("Will return the next square number if the original number can be square rooted", () => {
    expect(findNextSquare(121)).toEqual(144);
  });

  it("Will return -1 if the original number is not a square number", () => {
    expect(findNextSquare(90)).toEqual(-1);
  });
});
