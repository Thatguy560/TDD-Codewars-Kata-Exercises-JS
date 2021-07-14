const isolateIt = require("./TrainingMethodsOfArrayObjectMap");

describe("isolateIt", () => {
  it("Will loop through array and separate each element in half with a '|'.", () => {
    expect(isolateIt(["1234", "56789"])).toEqual(["12|34", "56|89"]);
  });
});
