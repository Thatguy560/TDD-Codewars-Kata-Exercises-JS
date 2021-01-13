const maskify = require("./creditCardMask");

describe("maskify", () => {
  it("Will mask all digits of the credit card apart from the last 4", () => {
    expect(maskify("4556364607935616")).toEqual("############5616");
  });

  it("Will return an empty string if empty string is given", () => {
    expect(maskify("")).toEqual("");
  });
});
