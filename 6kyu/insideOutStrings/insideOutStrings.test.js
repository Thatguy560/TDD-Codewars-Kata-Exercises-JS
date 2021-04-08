const insideOut = require("./insideOutStrings");

describe("insideOut", () => {
  it("Will turn a given string sentence inside out", () => {
    expect(insideOut("what time are we climbing up the volcano")).toEqual(
      "hwta item are we milcgnib up the lovcona"
    );
  });
});
