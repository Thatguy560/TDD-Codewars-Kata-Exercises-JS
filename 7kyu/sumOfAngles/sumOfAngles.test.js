const angle = require("./sumOfAngles");

describe("angle", () => {
  it("Will find the total sum of internal angles in an n-sided polygon", () => {
    expect(angle(3)).toEqual(180);
  });
});
