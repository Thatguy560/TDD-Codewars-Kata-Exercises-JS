const longestSubstringOf = require("./longestSubStringUniqueCharacters");

describe("longestSubstringOf", () => {
  it("Will return the longest substring from a sentence", () => {
    expect(longestSubstringOf("baacab")).toEqual(3);
  });
});
