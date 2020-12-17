const disemvowel = require("./disemvowelTrolls");

describe("disemvowel", () => {
  it("Will remove all vowels from the sentence", () => {
    expect(disemvowel("This website is for losers LOL!")).toEqual(
      "Ths wbst s fr lsrs LL!"
    );
  });
});
