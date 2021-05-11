const firstNonConsecutive = require("./findTheFirstNonConsecutiveNumber");

describe("firstNonConsecutive", () => {
  it("Will find the first Non Consecutive number", () => {
    expect(firstNonConsecutive([3, 4, 5, 6, 7, 8, 11, 12])).toEqual(11);
  });

  it("Will return null if no Non Consecutive number", () => {
    expect(
      firstNonConsecutive([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0])
    ).toEqual(null);
  });
});
