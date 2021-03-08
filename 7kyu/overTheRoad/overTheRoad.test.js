const overTheRoad = require("./overTheRoad.js");

describe("overTheRoad", () => {
  it("Will take a house number and return the opposite side of the street", () => {
    expect(overTheRoad(3, 3)).toEqual(4);
  });
});
