const list = require("./formatStringOfNames");

describe("list", () => {
  it("Will return an empty string if the name array is empty", () => {
    expect(list([])).toEqual("");
  });

  it("Will return an empty string if the name array is empty", () => {
    expect(list([{ name: "Bart" }])).toEqual("Bart");
  });

  it("Will return an empty string if the name array is empty", () => {
    expect(list([{ name: "Bart" }, { name: "Lisa" }])).toEqual("Bart & Lisa");
  });

  it("Will return an empty string if the name array is empty", () => {
    expect(
      list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toEqual("Bart, Lisa & Maggie");
  });
});
