const humanReadable = require("./humanReadableTime");

describe("humanReadable", () => {
  it("Will format the number into a time based string", () => {
    expect(humanReadable(86399)).toEqual("23:59:59");
  });
});
