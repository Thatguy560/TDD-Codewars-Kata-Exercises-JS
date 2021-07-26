const makeSentence = require("./simpleSentences");

describe("makeSentence", () => {
  it("Will produce a sentence out the given parts", () => {
    expect(makeSentence(["hello", ",", "my", "dear"])).toEqual(
      "hello, my dear."
    );
  });
});
