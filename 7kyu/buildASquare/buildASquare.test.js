const generateShape = require("./buildASquare");

describe("generateShape", () => {
  it("Will generate a shape from number n with number of pluses", () => {
    expect(generateShape(8)).toEqual(
      "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
    );
  });
});
