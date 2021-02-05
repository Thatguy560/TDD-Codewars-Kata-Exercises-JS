longestSubstringOf = (s) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let firstSet = new Set(s[i]);

    for (let j = i + 1; j < s.length; j++) {
      let nextCharacters = s[j];
      if (firstSet.has(nextCharacters)) {
        break;
      } else {
        firstSet.add(nextCharacters);
      }
      count = Math.max(count, firstSet.size);
    }
  }
  return count;
};

module.exports = longestSubstringOf;
