const theJanitor = require("./simpleFunTheJanitorAndHisMop");

describe("theJanitor", () => {
  it("Will find the minimum width of the mop required to erase each of the letters.", () => {
    expect(theJanitor("abacaba")).toEqual([
      7,
      5,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);
  });
});
