const isVow = require("./isThereAVowelInThere");

describe("isVow", () => {
  it("Will replace all relevant numbers with vowels and leave all other numbers untouched", () => {
    expect(
      isVow([
        118,
        117,
        120,
        121,
        117,
        98,
        122,
        97,
        120,
        106,
        104,
        116,
        113,
        114,
        113,
        120,
        106,
      ])
    ).toEqual([
      118,
      "u",
      120,
      121,
      "u",
      98,
      122,
      "a",
      120,
      106,
      104,
      116,
      113,
      114,
      113,
      120,
      106,
    ]);
  });
});
