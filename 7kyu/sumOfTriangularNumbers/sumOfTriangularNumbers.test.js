const sumTriangularNumbers = require("./sumOfTriangularNumbers");

describe("sumTriangularNumbers", () => {
  it("Will take a number and calculate the sum of the Triangular Numbers", () => {
    expect(sumTriangularNumbers(34)).toEqual(7140);
  });
});
