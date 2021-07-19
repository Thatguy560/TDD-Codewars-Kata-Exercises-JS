const matrixAddition = require("./matrixAddition");

describe("matrixAddition", () => {
  it("Will add two matrixs together", () => {
    expect(
      matrixAddition(
        [
          [1, 2, 3],
          [3, 2, 1],
          [1, 1, 1],
        ],
        [
          [2, 2, 1],
          [3, 2, 3],
          [1, 1, 3],
        ]
      )
    ).toEqual([
      [3, 4, 4],
      [6, 4, 4],
      [2, 2, 4],
    ]);
  });
});
