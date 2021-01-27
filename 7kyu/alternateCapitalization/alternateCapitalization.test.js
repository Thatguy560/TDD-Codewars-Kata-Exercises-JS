const capitalize = require("./alternateCapitalization");

describe("capitalize", () => {
  it("will create two different letter arrays from a word", () => {
    expect(capitalize("codewars")).toEqual(["CoDeWaRs", "cOdEwArS"]);
  });
});
