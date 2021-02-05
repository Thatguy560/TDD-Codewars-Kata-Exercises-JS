cap = (word) => {
  return (
    word == word.toUpperCase() ||
    word == word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
};

module.exports = cap;
