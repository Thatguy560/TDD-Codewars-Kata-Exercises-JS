const getMiddle = require("./getMiddleCharacter");

describe("getMiddleCharacter", () => {
  it("will return middle two characters if word is even in length", () => {
    expect(getMiddle("test")).toEqual("es");
  });

  it("will return one character if word is odd in length", () => {
    expect(getMiddle("testing")).toEqual("t");
  });
});
