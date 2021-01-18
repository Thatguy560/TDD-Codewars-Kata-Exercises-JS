const rps = require("./rockPaperScissors");

describe("rps", () => {
  it("Will return Draw if the two players choose the same combination", () => {
    expect(rps("rock", "rock")).toEqual("Draw!");
  });

  it("Will return Player 1 wins", () => {
    expect(rps("rock", "scissors")).toEqual("Player 1 won!");
  });

  it("Will return Player 2 wins", () => {
    expect(rps("scissors", "rock")).toEqual("Player 2 won!");
  });
});

// it("Will return -1 if the original number is not a square number", () => {
//     expect(findNextSquare(90)).toEqual(-1);
//   });
