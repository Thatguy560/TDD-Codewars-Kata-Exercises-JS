const whoIsPaying = require("./whoIsGoingToPayForTheWall");

describe("whoIsPaying", () => {
  it("Will return full name and truncated version if longer than 2", () => {
    expect(whoIsPaying("Mexico")).toEqual(["Mexico", "Me"]);
  });

  it("Will return truncated version if less than or equal to 2", () => {
    expect(whoIsPaying("Me")).toEqual(["Me"]);
  });
});
