const number = require("./Testing-1-2-3");

describe("number", () => {
  it("it will take an array and return each value with it's index", () => {
    expect(number(["a", "b", "c"])).toEqual(["1: a", "2: b", "3: c"]);
  });
});
