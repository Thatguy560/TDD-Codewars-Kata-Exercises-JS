const digitalRoot = require("./sumOfDigits");

describe("digitalRoot", () => {
  it("will take a number 'n' and continually reduce it until it's a single number", () => {
    expect(digitalRoot(16)).toEqual(7);
  });

  it("will also work with numbers greater than 2", () => {
    expect(digitalRoot(942)).toEqual(6);
  });
});
