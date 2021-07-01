const pyramid = require("./pyramidArray");

describe("pyramid", () => {
  it("Will generate an pyramid based on a given integer n", () => {
    expect(pyramid(3)).toEqual([[1], [1, 1], [1, 1, 1]]);
  });
});
