const elapsedSeconds = require("./elapsedSeconds");

describe("elapsedSeconds", () => {
  it("Will work out the elapsed seconds", () => {
    expect(elapsedSeconds(1, 1)).toEqual(0);
  });
});
