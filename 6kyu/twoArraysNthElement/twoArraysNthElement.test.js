const twoArraysNthElement = require("./twoArraysNthElement");

describe("twoArraysNthElement", () => {
  it("will work out the value from the two arrays based on the index.", () => {
    expect(twoArraysNthElement([1, 3, 4], [2, 6, 8], 5)).toEqual(8);
  });
});
