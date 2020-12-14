const getEvenNumbers = require("./arrayFilter");

describe("getEvenNumbers", () => {
  it("Will only return the even numbers from the array", () => {
    expect(getEvenNumbers([2, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});
