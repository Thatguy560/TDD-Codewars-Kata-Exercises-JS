const findOddNames = require("./higherOrderFunctionsSeriesFindTheOddNames");

describe("findOddNames", () => {
  it("Will return the odd names from a list.", () => {
    expect(
      findOddNames([
        {
          firstName: "Aba",
          lastName: "N.",
          country: "Ghana",
          continent: "Africa",
          age: 21,
          language: "Python",
        },
        {
          firstName: "Abb",
          lastName: "O.",
          country: "Israel",
          continent: "Asia",
          age: 39,
          language: "Java",
        },
      ])
    ).toEqual([
      {
        firstName: "Abb",
        lastName: "O.",
        country: "Israel",
        continent: "Asia",
        age: 39,
        language: "Java",
      },
    ]);
  });
});
