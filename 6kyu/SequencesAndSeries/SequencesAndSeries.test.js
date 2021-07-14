const getScore = require("./SequencesAndSeries");

describe("getScore", () => {
  it("Will take a number n and return the result based on the sequence", () => {
    expect(getScore(1)).toEqual(50);
  });

  it("Example 2", () => {
    expect(getScore(4)).toEqual(500);
  });
});
