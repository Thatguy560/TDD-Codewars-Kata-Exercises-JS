const solution = require("./romanNumeralsEncoder");

describe("solution", () => {
  it("Will convert a number to a roman numeral", () => {
    expect(solution(22)).toEqual("XXII");
  });
});
