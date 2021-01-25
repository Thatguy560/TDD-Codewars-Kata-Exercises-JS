const generateHashTag = require("./hashtagGenerator");

describe("generateHashTag", () => {
  it("Will create a hashtag from a string", () => {
    expect(generateHashTag("    Hello     World   ")).toEqual("#HelloWorld");
  });

  it("Will return false if empty string or longer than 140 characters", () => {
    expect(generateHashTag("")).toEqual(false);
  });
});
