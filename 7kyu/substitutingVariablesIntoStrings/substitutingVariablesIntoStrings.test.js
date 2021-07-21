const solution = require("./substitutingVariablesIntoStrings");

describe("solution", () => {
  it("Will pad a number into a 5 digit string", () => {
    expect(solution(109)).toEqual("Value is 00109");
  });
});
