const openOrSenior = require("./categorizeNewMember");

describe("openOrSenior", () => {
  it("Will sort out members based on age and the handicap", () => {
    expect(
      openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
      ])
    ).toEqual(["Open", "Senior", "Open", "Senior"]);
  });
});
