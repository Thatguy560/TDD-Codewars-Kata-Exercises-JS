const scoreThrows = require("./throwingDarts");

describe("scoreThrows", () => {
  it("Will return 0 if empty array", () => {
    expect(scoreThrows([])).toEqual(0);
  });

  it("Will return the score from an array", () => {
    expect(scoreThrows([1, 5, 11])).toEqual(15);
  });

  it("If all radii are less than 5 it will award an additional 100 points", () => {
    expect(scoreThrows([1, 2, 3, 4])).toEqual(140);
  });
});
