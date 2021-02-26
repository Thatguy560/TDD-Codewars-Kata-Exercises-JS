const solution = require("./meanSquareError");

describe("solution", () => {
  it("Will work out the mean square error from two arrays", () => {
    expect(solution([10, 20, 10, 2], [10, 25, 5, -2])).toEqual(16.5);
  });
});
