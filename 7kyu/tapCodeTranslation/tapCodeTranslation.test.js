const tapCodeTranslation = require("./tapCodeTranslation");

describe("tapCodeTranslation", () => {
  it("Will convert a word into dots for the taps and white spaces for pauses", () => {
    expect(tapCodeTranslation("final")).toEqual(
      ".. . .. .... ... ... . . ... ."
    );
  });
});
