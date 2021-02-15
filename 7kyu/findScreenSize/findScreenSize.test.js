const findScreenHeight = require("./findScreenSize");

describe("findScreenHeight", () => {
  it("will use the ratio to find the height from the width", () => {
    expect(findScreenHeight(1024, "4:3")).toEqual("1024x768");
  });
});
