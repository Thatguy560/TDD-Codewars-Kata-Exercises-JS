const points = require("./totalAmountOfPoints");

describe("score", () => {
  it("Will calculate the total score based on a series of games", () => {
    expect(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:4",
        "2:2",
        "3:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ])
    ).toEqual(12);
  });
});
