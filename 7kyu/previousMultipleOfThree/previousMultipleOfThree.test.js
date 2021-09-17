const prevMultOfThree = require("./previousMultipleOfThree");

describe("prevMultOfThree", () => {
  it("number isn't a multiple of three it will return 'null'.", () => {
    expect(prevMultOfThree(25)).toEqual(null);
  });

  it("Will continue to remove digits until it finds the previous multiple of three", () => {
    expect(prevMultOfThree(1244)).toEqual(12);
  });
});
