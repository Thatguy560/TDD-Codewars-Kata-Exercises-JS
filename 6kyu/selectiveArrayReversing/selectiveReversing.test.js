require("./selectiveReversing");

describe("selReverse", () => {
  it("will return the array if the length argument is zero", () => {
    expect(selReverse([], 0)).toEqual([]);
  });

  it("will reverse the array starting from the smallest by groups depending on length", () => {
    expect(selReverse([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 1, 4, 3, 6, 5]);
  });
});
