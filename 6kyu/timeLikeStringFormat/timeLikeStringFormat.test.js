const solution = require("./timeLikeStringFormat");

describe("timeLikeStringFormat", () => {
  it("will take a integer and change it into a time format.", () => {
    expect(solution(800)).toEqual("8:00");
  });

  it("will raise an error if the number provided is greater than 4 digits or less than 3.", () => {
    expect(() => {
      solution(10000);
    }).toThrow("WTF");
  });
});
