const perfectRoots = require("./numberWith3Roots");

describe("perfectRoots", () => {
  it("Will return true if number has 3 roots", () => {
    expect(perfectRoots(256)).toEqual(true);
  });

  it("Will return false if number doesn't have 3 roots", () => {
    expect(perfectRoots(1000)).toEqual(false);
  });
});
