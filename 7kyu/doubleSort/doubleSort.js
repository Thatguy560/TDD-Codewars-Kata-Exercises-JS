dbSort = (a) => {
  const sortedNumbers = a
    .filter((x) => typeof x == "number")
    .sort((a, b) => a - b);
  const sortedLetters = a.filter((x) => typeof x == "string").sort();
  return sortedNumbers.concat(sortedLetters);
};

module.exports = dbSort;
