const last = require("./sortbyLastChar");

describe("last", () => {
  it("Will sort a sentence by the last character in each word", () => {
    expect(last("what time are we climbing up the volcano")).toEqual([
      "time",
      "are",
      "we",
      "the",
      "climbing",
      "volcano",
      "up",
      "what",
    ]);
  });
});
