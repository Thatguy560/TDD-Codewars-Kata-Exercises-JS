const shifter = require("./shifterWords");

describe("shifter", () => {
  it("Will count the number of shifter words", () => {
    expect(shifter("OS IS UPDATED")).toEqual(2);
  });
});
