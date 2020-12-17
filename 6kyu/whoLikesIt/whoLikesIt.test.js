const likes = require("./whoLikesIt");

describe("likes", () => {
  it("will return 'no one likes this' if array is empty", () => {
    expect(likes([])).toEqual("no one likes this");
  });

  it("will return 'persons name likes this' if array has one name", () => {
    expect(likes(["Peter"])).toEqual("Peter likes this");
  });

  it("will return 'persons name likes this' if array has one name", () => {
    expect(likes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this");
  });

  it("will return 'persons name likes this' if array has one name", () => {
    expect(likes(["Max", "John", "Mark"])).toEqual(
      "Max, John and Mark like this"
    );
  });

  it("will return 'persons name likes this' if array has one name", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max", "Tim"])).toEqual(
      "Alex, Jacob and 3 others like this"
    );
  });
});
