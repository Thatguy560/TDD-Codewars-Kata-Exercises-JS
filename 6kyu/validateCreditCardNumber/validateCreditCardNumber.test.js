const validate = require("./validateCreditCardNumber");

describe("validate", () => {
  it("Will return false if invalid credit card number", () => {
    expect(validate(123)).toEqual(false);
  });

  it("Will return true if valid credit card number", () => {
    expect(validate(2121)).toEqual(true);
  });
});
