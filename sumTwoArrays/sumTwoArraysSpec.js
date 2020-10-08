describe("addArrays", () => {
  it("Will return an empty array if both arrays are empty", () => {
    expect(addArrays([], [])).toEqual([]);
  });

  it("Will sum two positve arrays together", () => {
    expect(addArrays([3, 2, 9], [1, 2])).toEqual([3, 4, 1]);
  });

  it("Will sum a positve and negative array together", () => {
    expect(addArrays([3, 2, 6, 6], [-7, 2, 2, 8])).toEqual([-3, 9, 6, 2]);
  });
});
