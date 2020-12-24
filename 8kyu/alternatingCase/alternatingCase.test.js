const toAlternatingCase = require("./alternatingCase");

describe("toAlternatingCase", () => {
  it("Will reverse the case of letters", () => {
    expect(toAlternatingCase("hello world")).toEqual("HELLO WORLD");
  });
});
