const capitals = require("./findTheCapitals");

describe("capitals", () => {
  it("Will return the indexes of the capitals in th string", () => {
    expect(capitals("CodEWaRs")).toEqual([0, 3, 4, 6]);
  });
});
