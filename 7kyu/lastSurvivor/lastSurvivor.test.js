const lastSurvivor = require("./lastSurvivor");

describe("lastSurvivor", () => {
  it("Will remove the letters based on the coords given", () => {
    expect(lastSurvivor("kbc", [0, 1])).toEqual("b");
  });
});
