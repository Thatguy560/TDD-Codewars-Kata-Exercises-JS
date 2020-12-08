const convert = require("./stringsToNumbers.js");

describe("stringsToNumbers,", () => {
  it("Will return a string array to an int array with less than 30 characters", () => {
    expect(convert(["1", "2", "3"])).toEqual([1, 2, 3]);
  });
});
