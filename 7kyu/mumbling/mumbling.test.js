const accum = require("./mumbling");

describe("accum", () => {
  it("Will repeat the letter based on the index and up-case each first letter", () => {
    expect(accum("ZpglnRxqenU")).toEqual(
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
    );
  });
});
