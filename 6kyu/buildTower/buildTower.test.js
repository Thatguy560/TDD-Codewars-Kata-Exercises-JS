const towerBuilder = require("./buildTower");

describe("towerBuilder", () => {
  it("Will take a number and build a tower based on that number", () => {
    expect(towerBuilder(3)).toEqual(["  *  ", " *** ", "*****"]);
  });
});
