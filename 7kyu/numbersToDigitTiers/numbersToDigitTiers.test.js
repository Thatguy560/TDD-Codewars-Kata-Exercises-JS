const createArrayOfTiers = require("./numbersToDigitTiers");

describe("createArrayOfTiers", () => {
  it("Will take a number and returns an array of strings containing the number cut off at each digit.", () => {
    expect(createArrayOfTiers(420)).toEqual(["4", "42", "420"]);
  });
});
