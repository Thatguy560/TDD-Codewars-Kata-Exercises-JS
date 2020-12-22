const isPowerOfTwo = require("./powerOfTwo");

describe("isPowerOfTwo", () => {
  it("Will return true if it's a power of two", () => {
    expect(isPowerOfTwo(1024)).toEqual(true);
  });

  it("Will return false if it's not a power of two", () => {
    expect(isPowerOfTwo(333)).toEqual(false);
  });
});
