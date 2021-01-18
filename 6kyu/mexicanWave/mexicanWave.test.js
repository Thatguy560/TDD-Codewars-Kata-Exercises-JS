const wave = require("./mexicanWave");

describe("wave", () => {
  it("Will up-case the letter in the word in the array depending on the index", () => {
    expect(wave("hello")).toEqual([
      "Hello",
      "hEllo",
      "heLlo",
      "helLo",
      "hellO",
    ]);
  });
});
