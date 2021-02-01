const cap = require("./correctCapitalization");

describe("cap", () => {
  it("Will return true if word has correct capitalization", () => {
    expect(cap("Test")).toEqual(true);
  });

  it("Will return false if word has incorrect capitalization", () => {
    expect(cap("abdgFTAHBAadTgiuGAKUGkgk")).toEqual(false);
  });
});
