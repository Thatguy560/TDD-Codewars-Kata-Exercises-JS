const nbDig = require("./countTheDigit");

describe("nbDig", () => {
  it("Will count the digits from d to n and square them add and sum it", () => {
    expect(nbDig(5750, 0)).toEqual(4700);
  });
});
