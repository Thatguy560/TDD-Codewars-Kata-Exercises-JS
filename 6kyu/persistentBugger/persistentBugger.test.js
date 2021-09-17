const persistence = require("./persistentBugger");

describe("persistence", () => {
  it("Will take a number and find the number of times until it reaches it's multiplicative persistence.", () => {
    expect(persistence(999)).toEqual(4);
  });
});
