const spoonerize = require("./spoonerizeMe");

describe("spoonerize", () => {
  it("Will swap the first letter from two words around.", () => {
    expect(spoonerize("nit picking")).toEqual("pit nicking");
  });
});
