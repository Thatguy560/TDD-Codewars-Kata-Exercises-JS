const expandedForm = require("./writeNumberInExpandedForm");

describe("expandedForm", () => {
  it("Will write out the numbers in expanded form", () => {
    expect(expandedForm(70304)).toEqual("70000 + 300 + 4");
  });
});
