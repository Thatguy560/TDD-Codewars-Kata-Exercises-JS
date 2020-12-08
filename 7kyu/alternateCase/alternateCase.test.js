const alternativeCase = require("./alternateCase");

describe("alternativeCase", () => {
  it("Will return lower case if the string is upper case", () => {
    expect(alternativeCase("ABC")).toEqual("abc");
  });

  it("Will return upper case if the string is lower case", () => {
    expect(alternativeCase("abc")).toEqual("ABC");
  });

  it("Will switch cases if the string is mixed", () => {
    expect(alternativeCase("Hello World")).toEqual("hELLO wORLD");
  });
});
