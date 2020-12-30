const findUniq = require("./findUniqueNumber");

describe("findUniq", () => {
  it("Will find the unqiue value from an array of numbers", () => {
    expect(findUniq([1, 1, 1, 2, 1, 1, 1])).toEqual(2);
  });
});
