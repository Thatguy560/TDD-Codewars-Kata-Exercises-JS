const infected = require("./Pandemia");

describe("infected", () => {
  it("Will work out the number of infected people", () => {
    expect(infected("01X000X010X011XX")).toEqual(72.72727272727273);
  });
});
