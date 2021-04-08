const paul = require("./paulsMisery");

describe("paul", () => {
  it("Will return Supher happy if less than 40", () => {
    expect(paul(["life", "eating", "life"])).toEqual("Super happy!");
  });

  it("Will return happy if greater than 40 and less than 70", () => {
    expect(
      paul([
        "Petes kata",
        "Petes kata",
        "eating",
        "Petes kata",
        "Petes kata",
        "eating",
      ])
    ).toEqual("Happy!");
  });

  it("Will return sad if greater than 70 and less than 100", () => {
    expect(
      paul([
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
      ])
    ).toEqual("Sad!");
  });

  it("Will return Miserable if greater than 100", () => {
    expect(
      paul([
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "Petes kata",
        "eating",
      ])
    ).toEqual("Miserable!");
  });
});
