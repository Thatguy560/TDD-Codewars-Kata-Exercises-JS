const toNato = require("./ifYouCanReadThis");

describe("toNato", () => {
  it("Will convert a series of letters into NATO words", () => {
    expect(toNato("If you can read")).toEqual(
      "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
    );
  });
});
