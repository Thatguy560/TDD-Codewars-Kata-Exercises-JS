const convert = require("./timeConverterHoursMinutesSecondsAndMilliseconds");

describe("convert", () => {
  it("Will convert a Date to it's time in Hours, Minutes, Seconds and Milliseconds", () => {
    expect(convert(new Date(1951, 10, 31, 2, 2, 24, 399))).toEqual(
      "02:02:24,399"
    );
  });
});
