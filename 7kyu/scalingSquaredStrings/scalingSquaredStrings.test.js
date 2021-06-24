const scale = require("./scalingSquaredStrings");

describe("scale", () => {
  it("Scales strings based on the string length and horizontal and vertical scaling", () => {
    expect(scale("abcd\nefgh\nijkl\nmnop", 2, 3)).toEqual(
      "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
    );
  });
});
