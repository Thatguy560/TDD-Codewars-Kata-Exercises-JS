cap = (word) => {
  const allUpperCase = word.toUpperCase();
  const allLowerCase = word.toLowerCase();
  const firstLetterCapitalized =
    word[0].toUpperCase() + word.slice(1).toLowerCase();
  return word == allUpperCase ||
    word == allLowerCase ||
    word == firstLetterCapitalized
    ? true
    : false;
};

module.exports = cap;
