const maxRot = require("./rotateForAMax");

describe("maxRot", () => {
  it("Will continue to rotate numbers until it gets the max value", () => {
    expect(maxRot(896219342)).toEqual(962193428);
  });
});
