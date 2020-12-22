const number = require("./numberOfPeopleInTheBus");

describe("number", () => {
  it("Will work out how many people go on the bus and how many get off", () => {
    expect(
      number([
        [10, 0],
        [3, 5],
        [5, 8],
      ])
    ).toEqual(5);
  });
});
