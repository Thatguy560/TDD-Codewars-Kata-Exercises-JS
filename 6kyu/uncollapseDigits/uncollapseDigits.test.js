const uncollapse = require("./uncollapseDigits");

describe("uncollapse", () => {
  it("Will split the stuck string into separate digits", () => {
    expect(uncollapse("foursixeighttwofive")).toEqual(
      "four six eight two five"
    );
  });
});
