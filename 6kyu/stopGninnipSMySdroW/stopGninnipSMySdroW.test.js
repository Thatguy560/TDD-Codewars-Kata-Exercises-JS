const spinWords = require("./stopGninnipSMySdroW");

describe("spinWords", () => {
  it("Will reverse any words(s) in the string that are greater than 5.", () => {
    expect(spinWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw");
  });
});
