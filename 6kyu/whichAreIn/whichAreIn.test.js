const inArray = require("./whichAreIn");

describe("inArray", () => {
  it("Will check if values present in the first array are present in the second array", () => {
    expect(
      inArray(
        ["arp", "live", "strong"],
        ["lively", "alive", "harp", "sharp", "armstrong"]
      )
    ).toEqual(["arp", "live", "strong"]);
  });
});
