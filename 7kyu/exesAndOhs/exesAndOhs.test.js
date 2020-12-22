const XO = require("./exesAndOhs");

describe("XO", () => {
  it("Will return true if number of X's match number of O's.", () => {
    expect(XO("xxOo")).toEqual(true);
  });

  it("Will return false if number of X's don't match number of O's.", () => {
    expect(XO("xxxm")).toEqual(false);
  });
});
