const toCamelCase = require("./stringToCamelCase");

describe("toCamelCase", () => {
  it("Will remove dash and underscore words and turn them into camel casing", () => {
    expect(toCamelCase("the_stealth_warrior")).toEqual("theStealthWarrior");
  });

  it("Will remove empty string if nothing is given", () => {
    expect(toCamelCase("''")).toEqual("''");
  });
});
