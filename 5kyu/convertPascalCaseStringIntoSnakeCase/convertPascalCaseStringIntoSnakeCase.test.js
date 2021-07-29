const toUnderscore = require("./convertPascalCaseStringIntoSnakeCase");

describe("toUnderscore", () => {
  it("Will convert PascalCase string into snake_case", () => {
    expect(toUnderscore("TestController")).toEqual("test_controller");
  });
});
