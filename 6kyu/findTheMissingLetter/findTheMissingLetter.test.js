const findMissingLetter = require("./findTheMissingLetter");

describe("findMissingLetter", () => {
  it("will return a missing letter from an array of numbers", () => {
    expect(findMissingLetter(["a", "b", "c", "d", "f"])).toEqual("e");
  });
});
