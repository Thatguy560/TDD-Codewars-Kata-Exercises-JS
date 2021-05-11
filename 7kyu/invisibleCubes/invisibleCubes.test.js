const notVisibleCubes = require("./invisibleCubes");

describe("notVisibleCubes", () => {
  it("Will work out the number of cubes not visible from outside.", () => {
    expect(notVisibleCubes(5)).toEqual(27);
  });
});
