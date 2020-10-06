describe("tenMinuteWalk", () => {
  it("Will return 'false' if the walk isn't 10 minutes", () => {
    expect(tenMinuteWalk(["w"])).toEqual(false);
  });
});
