const plant = require("./harvestFestival");

describe("plant", () => {
  it("Will grow a plant based on the seed, amount of water, fert and temp", () => {
    expect(plant("@", 3, 3, 25)).toEqual("---@@@---@@@---@@@");
  });

  it("Plant will not grow properly except for one flower at the end of the stem if temp is outside range of 20 and 30.", () => {
    expect(plant("*", 7, 18, 39)).toEqual(
      "-------------------------------------------------*"
    );
  });
});
