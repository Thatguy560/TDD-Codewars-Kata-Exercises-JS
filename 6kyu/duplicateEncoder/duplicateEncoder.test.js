const duplicateEncode = require("./duplicateEncoder");

describe("duplicateEncode", () => {
  it("Will replace each duplicate letter with a ')' and non duplicates with a '(', ignoring case.", () => {
    expect(duplicateEncode("Success")).toEqual(")())())");
  });
});
