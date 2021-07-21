const locate = require("./SearchInMultidimensionalArray");

describe("locate", () => {
  it("It will search for a value in a multidimensional array", () => {
    expect(locate(["a", "b", ["c", "d", ["e"]]], "a")).toEqual(true);
  });

  it("It will return false if it can't find the value in the array.", () => {
    expect(locate(["a", "b", ["c", "d", ["e"]]], "f")).toEqual(false);
  });
});
