const binaryArrayToNumber = require("./onesAndZeros");

describe("binaryArrayToNumber", () => {
  it("Will convert an array of ones and zeros and convert the binary number to an Integer.", () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toEqual(1);
  });

  it("Will work with a wide range of binary numbers", () => {
    expect(binaryArrayToNumber([1, 0, 0, 0, 1])).toEqual(17);
  });
});
