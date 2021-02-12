const dbSort = require("./doubleSort");

describe("dbSort", () => {
  it("Will sort letters and numbers in the correct order", () => {
    expect(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])).toEqual([
      0,
      2,
      2,
      "Apple",
      "Banana",
      "Mango",
      "Orange",
    ]);
  });
});
