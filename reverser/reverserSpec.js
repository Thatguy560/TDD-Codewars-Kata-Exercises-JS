describe("reverse", () => {
  it("will reverse a number without using strings test 1", () => {
    expect(reverse(1234)).toEqual(4321);
  });

  it("will reverse a number without using strings test 2", () => {
    expect(reverse(10987)).toEqual(78901);
  });

  it("will reverse a number without using strings test 3", () => {
    expect(reverse(1020)).toEqual(201);
  });
});
