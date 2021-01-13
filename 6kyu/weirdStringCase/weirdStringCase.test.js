const toWeirdCase = require("./weirdStringCase");

describe("toWeirdCase", () => {
  it("Will upcase any character with an even index", () => {
    expect(toWeirdCase("Weird string case")).toEqual("WeIrD StRiNg CaSe");
  });
});
