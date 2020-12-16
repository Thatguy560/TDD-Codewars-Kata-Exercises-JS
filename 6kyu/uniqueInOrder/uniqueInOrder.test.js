const uniqueInOrder = require("./uniqueInOrder");

describe("uniqueInOrder", () => {
  it("Will filter out all unique elements and keep the order", () => {
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
