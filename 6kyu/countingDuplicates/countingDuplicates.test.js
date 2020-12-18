const duplicateCount = require("./countingDuplicates");

describe("duplicateCount", () => {
  it("Will count the number of duplicates in string", () => {
    expect(duplicateCount("aabbcde")).toEqual(2);
  });

  it("if string is empty it will return 0", () => {
    expect(duplicateCount("")).toEqual(0);
  });
});
