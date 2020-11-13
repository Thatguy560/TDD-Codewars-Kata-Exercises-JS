describe("sumOrProduct", () => {
  it("Will return 'sum' if sum of largest numbers is greater than product of smallest numbers", () => {
    expect(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toEqual("sum");
  });

  it("Will return 'product' if sum of largest numbers is less than product of smallest numbers", () => {
    expect(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)).toEqual(
      "product"
    );
  });

  it("Will return 'same' if sum of largest numbers equals product of smallest numbers", () => {
    expect(sumOrProduct([10, 20, 3, 30, 5, 4], 3)).toEqual("same");
  });
});
