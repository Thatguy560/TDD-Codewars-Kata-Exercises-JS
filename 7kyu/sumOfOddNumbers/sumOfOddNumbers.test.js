const rowSumOddNumbers = require("./sumOfOddNumbers");

describe("rowSumOddNumbers", () => {
  it("Will return the sum of all odd numbers", () => {
    expect(rowSumOddNumbers(42)).toEqual(74088);
  });
});
