const smallEnough = require("./smallEnough");

describe("smallEnough", () => {
  it("if number has a square root than square root that number otherwise square the number", () => {
    expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toEqual(
      true
    );
  });

  it("if number has a square root than square root that number otherwise square the number", () => {
    expect(smallEnough([66, 101], 100)).toEqual(false);
  });
});
