const automorphic = require("./automorphicNumber");

describe("automorphic", () => {
  it("Will return Automorphic if the number squared ends with the same digit numbers", () => {
    expect(automorphic(25)).toEqual("Automorphic");
  });

  it("Will return Not!! if the number squared doesn't end with the same digit numbers", () => {
    expect(automorphic(13)).toEqual("Not!!");
  });
});
