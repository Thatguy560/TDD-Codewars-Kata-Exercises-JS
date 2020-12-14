const findDeletedNumber = require("./lostNumberInSequence");

describe("findDeletedNumber", () => {
  it("Will delete numbers from one array to the other", () => {
    expect(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])).toEqual(2);
  });
});
