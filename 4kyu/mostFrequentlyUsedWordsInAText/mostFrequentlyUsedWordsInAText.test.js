const topThreeWords = require("./mostFrequentlyUsedWordsInAText");

describe("topThreeWords", () => {
  it("Will return the top three most used words from some text", () => {
    expect(
      topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
    ).toEqual(["e", "ddd", "aa"]);
  });

  it("Will return an empty array if no words found", () => {
    expect(topThreeWords("  '  ")).toEqual([]);
  });
});
