const validBraces = require("./validBraces");

describe("validBraces", () => {
  it("Will return true if matched with the correct brace", () => {
    expect(validBraces("{}")).toEqual(true);
  });

  it("Will return false if matched with the incorrect brace", () => {
    expect(validBraces("(([]{}]]")).toEqual(false);
  });
});
