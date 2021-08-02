const mxdiflg = require("./maximumLengthDifference");

describe("mxdiflg", () => {
  it("Will find the maximum length difference between two different sentence arrays", () => {
    expect(
      mxdiflg(
        [
          "hoqq",
          "bbllkw",
          "oox",
          "ejjuyyy",
          "plmiis",
          "xxxzgpsssa",
          "xxwwkktt",
          "znnnnfqknaz",
          "qqquuhii",
          "dvvvwz",
        ],
        ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
      )
    ).toEqual(13);
  });

  it("Will return -1 if a1 and/or a2 is empty", () => {
    expect(mxdiflg([], ["abc"])).toEqual(-1);
  });
});
