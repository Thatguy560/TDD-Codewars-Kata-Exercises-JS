const moveZeros = require("./movingZerosToEnd");

describe("moveZeros", () => {
  it("Will take an array and move all the zeros at the end, preserving the order of the other elements", () => {
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])).toEqual([
      false,
      1,
      1,
      2,
      1,
      3,
      "a",
      0,
      0,
    ]);
  });
});
