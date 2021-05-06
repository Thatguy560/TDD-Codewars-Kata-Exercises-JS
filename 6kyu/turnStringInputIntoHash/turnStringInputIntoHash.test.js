const strToHash = require("./turnStringInputIntoHash");

describe("strToHash", () => {
  it("Will convert string input into a Hash array", () => {
    expect(strToHash("C=227, Ij=25, MnOpQ=209, fGh=102")).toEqual({
      C: 227,
      Ij: 25,
      MnOpQ: 209,
      fGh: 102,
    });
  });
});
