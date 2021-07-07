const mergesorted = require("./mergeSortFunction");

describe("mergesorted", () => {
  it("Will merge two different Arrays and then sort them from smallest to biggest without using sort", () => {
    expect(mergesorted([1, 2, 4], [6, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
