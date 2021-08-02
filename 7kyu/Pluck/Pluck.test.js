const pluck = require("./Pluck");

describe("pluck", () => {
  it("Will return a sequence containing the name property of each object.", () => {
    expect(pluck([{ a: 1 }, { a: 2 }], "a")).toEqual([1, 2]);
  });
});
