const isValidIP = require("./IPValidation");

describe("isValidIP", () => {
  it("Will return true if it's a valid IP Address", () => {
    expect(isValidIP("0.0.0.0")).toEqual(true);
  });

  it("Will return false if not a correct valid IP Address", () => {
    expect(isValidIP("12.34.56")).toEqual(false);
  });
});
