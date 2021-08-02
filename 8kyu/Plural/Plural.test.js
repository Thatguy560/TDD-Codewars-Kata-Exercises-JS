const plural = require("./Plural");

describe("plural", () => {
  it("Will return true if plural", () => {
    expect(plural(100)).toEqual(true);
  });

  it("Will return false if not plural", () => {
    expect(plural(1)).toEqual(false);
  });
});
