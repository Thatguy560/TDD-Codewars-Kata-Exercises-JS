const divisibleBy = require("./divisibleByGivenNumber");

describe("divisibleBy", () => {
  it("Will filter out all the elements that don't divide evenly by the divisor", () => {
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6]);
  });
});
