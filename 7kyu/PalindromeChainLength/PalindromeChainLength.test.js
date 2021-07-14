const palindromeChainLength = require("./PalindromeChainLength");

describe("palindromeChainLength", () => {
  it("Will work out the number of steps to find the Palindrome number", () => {
    expect(palindromeChainLength(87)).toEqual(4);
  });
});
