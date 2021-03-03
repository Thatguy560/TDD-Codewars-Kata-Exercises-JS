const evenLast = require("./evensTimesLast");

describe("evenLast", () => {
  it("Will sum all the numbers at the even index and then times it by the last number in the array", () => {
    expect(evenLast([2, 3, 4, 5])).toEqual(30);
  });

  it("Will return 0 if it's an empty array", () => {
    expect(evenLast([])).toEqual(0);
  });
});
