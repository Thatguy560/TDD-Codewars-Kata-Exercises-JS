describe("highAndLow", () => {
  it("will return the highest and lowest numbers from a positive set of numbers", () => {
    expect(highAndLow("1 2 3 4 5")).toEqual("5 1");
  });

  it("will return the highest and lowest numbers from a negative set of numbers", () => {
    expect(highAndLow("-1 -2 -3 -4 -5")).toEqual("-1 -5");
  });

  it("will return the highest and lowest numbers from a mixed set of numbers", () => {
    expect(highAndLow("1 9 3 4 -5")).toEqual("9 -5");
  });
});
