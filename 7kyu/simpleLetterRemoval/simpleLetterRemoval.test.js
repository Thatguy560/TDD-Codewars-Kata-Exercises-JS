const solve = require("./simpleLetterRemoval");

describe("solve", () => {
  it("Will remove letters based on the letter and how many are being removed", () => {
    expect(solve("abracadabra", 1)).toEqual("bracadabra");
  });

  it("Will return empty string if k is greater than the string", () => {
    expect(solve("abracadabra", 50)).toEqual("");
  });
});
