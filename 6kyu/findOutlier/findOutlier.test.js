const findOutlier = require("./findOutlier");

describe("findOutlier", () => {
  it("Works with odd numbers", () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toEqual(11);
  });

  it("Works with even numbers", () => {
    expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toEqual(160);
  });
});
