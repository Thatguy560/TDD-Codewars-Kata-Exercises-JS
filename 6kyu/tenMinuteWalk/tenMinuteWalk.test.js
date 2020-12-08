const tenMinuteWalk = require("./tenMinuteWalk");

describe("tenMinuteWalk", () => {
  it("Will return 'false' if the walk isn't 10 minutes", () => {
    expect(tenMinuteWalk(["w", "s"])).toEqual(false);
  });

  it("Will return 'false' if the walk is over 10 minutes", () => {
    expect(
      tenMinuteWalk([
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
      ])
    ).toEqual(false);
  });

  it("Will return false if the walk does not finish where it started", () => {
    expect(
      tenMinuteWalk(["w", "s", "e", "n", "n", "e", "s", "w", "w", "w"])
    ).toEqual(false);
  });

  it("Will return false if the walk is less than 10 minutes even if number of directions equal", () => {
    expect(tenMinuteWalk(["n", "n", "n", "s", "s", "s"])).toEqual(false);
  });

  it("Will returns true if the number of 'e' equals 'w'", () => {
    expect(
      tenMinuteWalk(["e", "e", "e", "e", "e", "w", "w", "w", "w", "w"])
    ).toEqual(true);
  });

  it("Will returns true if the number of 'n' equals 's'", () => {
    expect(
      tenMinuteWalk(["n", "n", "n", "n", "n", "s", "s", "s", "s", "s"])
    ).toEqual(true);
  });
});
