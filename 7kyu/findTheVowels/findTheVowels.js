vowelIndices = (word) => {
  var result = [];
  for (let i = 0; i < word.length; i++) {
    if (/[aeiouy]/i.test(word[i])) {
      result.push(i + 1);
    }
  }
  return result;
};

module.exports = vowelIndices;
