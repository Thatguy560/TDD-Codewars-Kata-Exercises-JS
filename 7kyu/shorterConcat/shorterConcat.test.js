const shorterReverseLonger = require("./shorterConcat");

describe("shorterReverseLonger", () => {
  it("If first word is greater or equal than second word then it will return string in the form of b + reverse(a) + b", () => {
    expect(shorterReverseLonger("first", "abcde")).toEqual("abcdetsrifabcde");
  });

  it("If second word is greater than first word then it will return string in the form of a + reverse(b) + a", () => {
    expect(shorterReverseLonger("abcde", "fghitt")).toEqual("abcdettihgfabcde");
  });
});
