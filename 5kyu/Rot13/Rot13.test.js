const rot13 = require("./Rot13");

describe("rot13", () => {
  it("Will substitute a message with letters 13 letters after it in the alphabet", () => {
    expect(rot13("Test")).toEqual("Grfg");
  });
});
