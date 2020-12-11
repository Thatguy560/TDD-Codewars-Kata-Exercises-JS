const arrayDiff = require("./arrayDiff");

describe("arrayDiff", () => {
  it("Will subtract one array list fro the other", () => {
    expect(arrayDiff([1, 2, 2, 2, 3], [2])).toEqual([1, 3]);
  });
});
