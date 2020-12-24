const camelCase = require("./camelCaseMethod");

describe("camelCase", () => {
  it("Will return a string as a camel case method", () => {
    expect(camelCase("test case")).toEqual("TestCase");
  });
});
