const bears = require("./pairsOfBears");

describe("bears", () => {
  it("Will return true if number of bears in string is greater than x", () => {
    expect(bears(3, "88Bifk8hB8BB8BBBB888chl8BhBfd")).toEqual([
      "8BB8B8B88B",
      true,
    ]);
  });

  it("Will return false if number of bears in string is lower than x", () => {
    expect(bears(7, "8j8mBliB8gimjB8B8jlB")).toEqual(["B8B8B8", false]);
  });
});
