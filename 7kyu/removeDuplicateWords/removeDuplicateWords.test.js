const removeDuplicateWords = require("./removeDuplicateWords");

describe("removeDuplicateWords", () => {
  it("Will remove all duplicate words from a string", () => {
    expect(
      removeDuplicateWords(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
      )
    ).toEqual("alpha beta gamma delta");
  });
});
