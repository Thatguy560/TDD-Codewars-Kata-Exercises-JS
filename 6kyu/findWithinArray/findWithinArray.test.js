const findInArray = require("./findWithinArray");
var trueIfEven = function (value, index) {
  return value % 2 === 0;
};

describe("findInArray", () => {
  it("Will iterate through the function until it returns true and returns the index.", () => {
    expect(findInArray([1, 3, 5, 6, 7], trueIfEven)).toEqual(3);
  });

  it("Will return -1 if it never returns true", () => {
    expect(findInArray([1, 3, 5, 5, 7], trueIfEven)).toEqual(-1);
  });
});
