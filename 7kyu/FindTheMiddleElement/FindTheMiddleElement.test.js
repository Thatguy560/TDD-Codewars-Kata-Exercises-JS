const gimme = require("./FindTheMiddleElement");

describe("gimme", () => {
  it("Will find the middle element", () => {
    expect(gimme([5, 10, 14])).toEqual(1);
  });
});
