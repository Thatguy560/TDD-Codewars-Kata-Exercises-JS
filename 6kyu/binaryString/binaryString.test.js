const toBinaryString = require("./binaryString");

describe("toBinaryString", () => {
  it("Will convert a number to a Binary string without toString(2)", () => {
    expect(toBinaryString(15)).toEqual("1111");
  });

  it("Will return '0' if number given is 0.", () => {
    expect(toBinaryString(0)).toEqual("0");
  });
});
