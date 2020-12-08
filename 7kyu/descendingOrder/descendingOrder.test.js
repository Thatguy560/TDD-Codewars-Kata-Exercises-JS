const descendingOrder = require("./descendingOrder");

describe("descendingOrder", () => {
  it("Will return a single digit number", () => {
    expect(descendingOrder(5)).toEqual(5);
  });

  it("Will return a number in an ascending order into a descending order.", () => {
    expect(descendingOrder(123456789)).toEqual(987654321);
  });

  it("Will return a mixed number in a descending order.", () => {
    expect(descendingOrder(145263)).toEqual(654321);
  });
});
