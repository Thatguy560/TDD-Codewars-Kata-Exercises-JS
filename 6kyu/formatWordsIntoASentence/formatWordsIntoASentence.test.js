const formatWords = require("./formatWordsIntoASentence");

describe("formatWords", () => {
  it("Will format names from an array into a sentence", () => {
    expect(formatWords(["ninja", "samurai", "ronin"])).toEqual(
      "ninja, samurai and ronin"
    );
  });

  it("If array has only one name it will return just the name", () => {
    expect(formatWords(["Peter"])).toEqual("Peter");
  });

  it("If empty then it will return an empty string", () => {
    expect(formatWords([])).toEqual("");
  });
});
