const middleCharacter = require("./middleCharacter");

describe("middleCharacter", () => {
  it("will only return one character if the word is odd", () => {
    expect(middleCharacter("middle")).toEqual("dd");
  });

  it("Will return the middle two characters if the word is even", () => {
    expect(middleCharacter("testing")).toEqual("t");
  });
});
