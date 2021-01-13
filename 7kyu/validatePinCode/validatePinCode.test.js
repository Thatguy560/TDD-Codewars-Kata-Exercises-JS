const validatePIN = require("./validatePinCode");

describe("validatePIN", () => {
  it("Will return true if a pin is valid", () => {
    expect(validatePIN("1234")).toEqual(true);
  });

  it("Will return false if a pin is not valid", () => {
    expect(validatePIN("ab1e34")).toEqual(false);
  });
});
