const gordon = require("./hellsKitchen");

describe("gordon", () => {
  it("Will convert a string to Gordon Ramsay shouting", () => {
    expect(gordon("What feck damn cake")).toEqual(
      "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!"
    );
  });
});
