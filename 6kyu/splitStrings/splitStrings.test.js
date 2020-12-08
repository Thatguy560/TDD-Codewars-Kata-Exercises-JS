const solution = require("./splitStrings");

describe("solution", () => {
  it("will split the string into pairs with an _ at the end if string is odd in length", () => {
    expect(solution("abc")).toEqual(["ab", "c_"]);
  });
});
