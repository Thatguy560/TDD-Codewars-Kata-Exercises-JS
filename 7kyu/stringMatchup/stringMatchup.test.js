const solve = require("./stringMatchup");

describe("solve", () => {
  it("Will compare two sets of arrays and return the number of times the second array array appears in the first", () => {
    expect(
      solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"])
    ).toEqual([2, 1, 0]);
  });
});
