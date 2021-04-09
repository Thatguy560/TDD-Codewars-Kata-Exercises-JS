const sabb = require("./theOfficeVISabbatical");

describe("sabb", () => {
  it("Will return Sabbatical! Boom! if result is over 22", () => {
    expect(sabb("Can I have a sabbatical?", 5, 5)).toEqual("Sabbatical! Boom!");
  });

  it("Will return Back to your desk if result is less than 22", () => {
    expect(sabb("Why are you shouting?", 7, 2)).toEqual(
      "Back to your desk, boy."
    );
  });
});
