const pigIt = require("./simplePigLatin");

describe("pigIt", () => {
  it("Will move the first letter to the end and add 'ay' to the end", () => {
    expect(pigIt("Pig latin is cool")).toEqual("igPay atinlay siay oolcay");
  });

  it("Will leave punctuation marks untouched", () => {
    expect(pigIt("Hello world !")).toEqual("elloHay orldway !");
  });
});
