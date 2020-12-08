const add = require("./sumOfTwoIntegers");

describe("sumOfTwoIntegers", () => {
  it("Will return the sum of two numbers without using + or - operator.", () => {
    expect(add(6, 19)).toEqual(25);
  });
});
