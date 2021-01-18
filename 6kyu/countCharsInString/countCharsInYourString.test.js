const count = require("./countCharsInYourString");

describe("count", () => {
  it("Will return the frequency of how often a letter appears", () => {
    expect(count("aba")).toEqual({ a: 2, b: 1 });
  });

  it("Will return an empty hash if the str is null/empty", () => {
    expect(count("")).toEqual({});
  });
});
