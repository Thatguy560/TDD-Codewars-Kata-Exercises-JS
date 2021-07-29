const getMissingElement = require("./returnTheMissingElement");

describe("getMissingElement", () => {
  it("Will return the missing element in a list of numbers", () => {
    expect(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])).toEqual(3);
  });
});
