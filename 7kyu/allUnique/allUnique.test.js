const hasUniqueChars = require("./allUnique");

describe("hasUniqueChars", () => {
  it("Will check if the string has only unique characters", () => {
    expect(hasUniqueChars("abcdef")).toEqual(true);
  });

  it("Will return false if the string has repeated characters", () => {
    expect(hasUniqueChars("++-")).toEqual(false);
  });
});
