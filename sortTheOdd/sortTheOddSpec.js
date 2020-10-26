describe("sortArray", () => {
  it("Will sort the odd but keep the evens in the same place, example 1", () => {
    expect(sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
  });

  it("Will sort the odd but keep the evens in the same place, example 2", () => {
    expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
  });
});
