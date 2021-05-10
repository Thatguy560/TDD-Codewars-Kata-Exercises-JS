const solve = require(".//alphabetSymmetry");

describe("solve", () => {
  it("Will return the number of letters that are in the correct order", () => {
    expect(solve(["abode", "ABc", "xyzD"])).toEqual([4, 3, 1]);
  });
});
