const solution = require("./romanNumeralsDecoder");

describe("solution", () => {
  it("Will convert a roman numeral to a number", () => {
    expect(solution("XXI")).toEqual(21);
  });
});
