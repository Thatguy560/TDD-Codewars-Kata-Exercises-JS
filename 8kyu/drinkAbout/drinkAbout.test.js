const peopleWithAgeDrink = require("./drinkAbout");

describe("peopleWithAgeDrink", () => {
  it("Will return toddy is less than 14", () => {
    expect(peopleWithAgeDrink(13)).toEqual("drink toddy");
  });

  it("Will return coke is less than 18", () => {
    expect(peopleWithAgeDrink(17)).toEqual("drink coke");
  });

  it("Will return beer is less than 21", () => {
    expect(peopleWithAgeDrink(20)).toEqual("drink beer");
  });

  it("Will return whisky is less than 30", () => {
    expect(peopleWithAgeDrink(29)).toEqual("drink whisky");
  });
});
