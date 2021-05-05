const vowelIndices = require("./findTheVowels");

describe("vowelIndices", () => {
  it("Will return the indices of the vowels in the word", () => {
    expect(vowelIndices("supercalifragilisticexpialidocious")).toEqual([
      2,
      4,
      7,
      9,
      12,
      14,
      16,
      19,
      21,
      24,
      25,
      27,
      29,
      31,
      32,
      33,
    ]);
  });
});
