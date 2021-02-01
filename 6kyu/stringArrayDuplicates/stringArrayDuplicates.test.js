const dup = require("./stringArrayDuplicates");

describe("dup", () => {
  it("will remove all consecutive duplicates from the array", () => {
    expect(dup(["putteellinen", "keenness"])).toEqual(["putelinen", "kenes"]);
  });
});
