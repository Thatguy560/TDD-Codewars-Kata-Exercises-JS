const dontGiveMeFive = require("./dontGiveMeFive");

describe("dontGiveMeFive", () => {
  it("Will take a range and remove anything with 5 in it", () => {
    expect(dontGiveMeFive(4, 17)).toEqual(12);
  });
});
