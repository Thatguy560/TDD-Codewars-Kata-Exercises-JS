const keysAndValues = require("./getKeyValuePairsAsArrays");

describe("keysAndValues", () => {
  it("Will return the keys and values as separate arrays", () => {
    expect(keysAndValues({ a: 1, b: 2, c: 3 })).toEqual([
      ["a", "b", "c"],
      [1, 2, 3],
    ]);
  });
});
