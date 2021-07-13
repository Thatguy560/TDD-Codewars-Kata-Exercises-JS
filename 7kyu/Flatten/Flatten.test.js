const flatten = require("./Flatten");

describe("flatten", () => {
  it("flattens multiple arrays without using the flatten method", () => {
    expect(
      flatten([
        [1, 2, 3],
        ["a", "b", "c"],
        [1, 2, 3],
      ])
    ).toEqual([1, 2, 3, "a", "b", "c", 1, 2, 3]);
  });
});
