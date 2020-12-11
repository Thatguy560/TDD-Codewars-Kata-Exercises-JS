const order = require("./yourOrderPlease");

describe("order", () => {
  it("Will arrange the words based on the numbers in the string example 1", () => {
    expect(order("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est");
  });

  it("Will arrange the words based on the numbers in the string example 2", () => {
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toEqual(
      "Fo1r the2 g3ood 4of th5e pe6ople"
    );
  });
});

// Will arrange the words based on the numbers in the string example 1
