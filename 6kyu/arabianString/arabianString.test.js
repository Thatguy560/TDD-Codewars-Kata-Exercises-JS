const camelize = require("./arabianString");

describe("camelize", () => {
  it("Will convert a string to Arabian String", () => {
    expect(camelize("your-NaMe-here")).toEqual("YourNameHere");
  });

  it("Will return an empty string if string is null", () => {
    expect(camelize("")).toEqual("");
  });
});
