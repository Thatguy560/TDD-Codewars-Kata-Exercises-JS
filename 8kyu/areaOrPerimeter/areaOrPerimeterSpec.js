describe("areaOrPerimeter", () => {
  it("Will return the area if the length and width are the same legnth", () => {
    expect(areaOrPerimeter(6, 10)).toEqual(32);
  });

  it("Will return the area if the length and width are the same legnth", () => {
    expect(areaOrPerimeter(4, 4)).toEqual(16);
  });
});
