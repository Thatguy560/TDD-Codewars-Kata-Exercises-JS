const solution = require("./roundBy0.5Steps");

describe("solution", () => {
  it("Will round a number to the nearest 0.5", () => {
    expect(solution(4.6)).toEqual(4.5);
  });
});
