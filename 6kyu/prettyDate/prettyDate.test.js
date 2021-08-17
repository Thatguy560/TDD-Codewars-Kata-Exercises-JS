const toPretty = require("./prettyDate");

describe("toPretty", () => {
  it("Will convert time in seconds", () => {
    expect(toPretty(30)).toEqual("30 seconds ago");
  });

  it("Will convert time in minutes", () => {
    expect(toPretty(180)).toEqual("3 minutes ago");
  });

  it("Will convert time in hours", () => {
    expect(toPretty(10800)).toEqual("3 hours ago");
  });

  it("Will convert time in days", () => {
    expect(toPretty(100000)).toEqual("a day ago");
  });

  it("Will convert time in weeks", () => {
    expect(toPretty(31449600)).toEqual("52 weeks ago");
  });
});
