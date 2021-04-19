const addArrays = require("./allStarsCodingChallenge20");

describe("addArrays", () => {
  it("Will add two separate arrays together", () => {
    expect(addArrays([1, 2], [4, 5])).toEqual([5, 7]);
  });

  it("Will throw an error if arrays aren't equal in length", () => {
    expect(() => {
      addArrays([1, 2, 3], [5, 6]);
    }).toThrow("ERROR");
  });
});

// expect(() => parser.parse(raw))
//   .toThrow(new Error('Parsing is not possible'));
