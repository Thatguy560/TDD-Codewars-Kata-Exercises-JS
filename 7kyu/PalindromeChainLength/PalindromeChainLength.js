palindromeChainLength = (n) => {
  let reversed = Number([...n.toString()].reverse().join(""));
  let count = 0;
  while (reversed !== n) {
    n = n + reversed;
    reversed = Number([...n.toString()].reverse().join(""));
    count++;
  }
  return count;
};

module.exports = palindromeChainLength;
