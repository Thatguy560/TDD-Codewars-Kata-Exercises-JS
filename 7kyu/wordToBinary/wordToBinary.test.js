const wordToBin = require("./wordToBinary");

describe("wordToBin", () => {
  it("Will convert a word to binary numbers", () => {
    expect(wordToBin("man")).toEqual(["01101101", "01100001", "01101110"]);
  });
});
