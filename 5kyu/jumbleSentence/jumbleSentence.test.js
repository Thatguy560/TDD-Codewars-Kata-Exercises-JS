const jumbleSentence = require("./jumbleSentence");

describe("jumbleSentence", () => {
  it("Will re-arrange the sentence.", function () {
    expect(jumbleSentence("The cat sat on the Ikea mat.")).toEqual(
      "Eht act ast no eht Aeik amt."
    );
  });
});
