const problem = require("./superDuperEasy");

describe("problem", () => {
  it("Will return an error if just a string", () => {
    expect(problem("Hello")).toEqual("Error");
  });

  it("Will the same number timed by 50 and increased by 6", () => {
    expect(problem(1)).toEqual(56);
  });
});
