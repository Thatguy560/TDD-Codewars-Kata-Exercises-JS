const splitAndAdd = require("./SplitAndThenAddBothSidesOfAnArrayTogether");

describe("splitAndAdd", () => {
  it("Will just return the array if number n is less than one or array length is equal to one", () => {
    expect(splitAndAdd(15)).toEqual(15);
  });

  //   it("wWill split and add sides of an array together", () => {
  //     expect(
  //       splitAndAdd(
  //         [
  //           3,
  //           234,
  //           25,
  //           345,
  //           45,
  //           34,
  //           234,
  //           235,
  //           345,
  //           34,
  //           534,
  //           45,
  //           645,
  //           645,
  //           645,
  //           4656,
  //           45,
  //           3,
  //         ],
  //         4
  //       )
  //     ).toEqual([1040, 7712]);
  //   });
});
