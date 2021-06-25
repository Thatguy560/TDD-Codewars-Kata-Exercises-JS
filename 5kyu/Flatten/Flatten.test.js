const flatten = require("./Flatten");

describe("flatten", () => {
  it("Will flatten all the elements into one array", () => {
    expect(flatten(1, [2, 3], 4, 5, [6, [7]])).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
    ]);
  });
});
