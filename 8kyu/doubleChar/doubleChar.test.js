const doubleChar = require("./doubleChar");

describe("doubleChar", () => {
  it("Will repeat each character in the string once", () => {
    expect(doubleChar("abcd")).toEqual("aabbccdd");
  });
});
