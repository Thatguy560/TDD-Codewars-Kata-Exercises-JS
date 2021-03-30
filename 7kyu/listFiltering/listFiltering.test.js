const filterList = require("./listFiltering");

describe("filter_list", () => {
  it("Will filter out all numbers from a mixed array", () => {
    expect(filterList([1, 2, "aasf", "1", "123", 123])).toEqual([1, 2, 123]);
  });
});
