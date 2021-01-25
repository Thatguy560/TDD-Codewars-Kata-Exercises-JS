const countSmileys = require("./countSmileyFaces");

describe("countSmileys", () => {
  it("Will count the number of valid smileys in a string", () => {
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toEqual(1);
  });
});
