describe("getNames", () => {
  it("Will return the names from the data provided", () => {
    expect(
      getNames([
        { name: "Joe", age: 20 },
        { name: "Bill", age: 30 },
        { name: "Kate", age: 23 },
      ])
    ).toEqual(["Joe", "Bill", "Kate"]);
  });
});
