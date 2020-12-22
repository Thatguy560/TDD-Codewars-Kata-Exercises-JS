const removeSmallest = require("./removeTheMinimum");

describe("removeSmallest", () => {
  it("will remove the minimum value but keep the order the same", () => {
    expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
  });
});
