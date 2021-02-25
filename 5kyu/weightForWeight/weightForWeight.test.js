const orderWeight = require("./weightForWeight");

describe("orderWeight", () => {
  it("Will order the weights by the sum of it's digits", () => {
    expect(orderWeight("103 123 4444 99 2000")).toEqual("2000 103 123 4444 99");
  });
});
