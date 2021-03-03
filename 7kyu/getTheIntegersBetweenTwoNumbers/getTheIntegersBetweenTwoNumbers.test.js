const range = require("./getTheIntegersBetweenTwoNumbers");

describe("range", () => {
  it("Will build an array between the given two numbers", () => {
    expect(range(2, 9)).toEqual([3, 4, 5, 6, 7, 8]);
  });
});
