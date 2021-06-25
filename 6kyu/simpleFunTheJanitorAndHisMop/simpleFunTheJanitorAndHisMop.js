theJanitor = (word) => {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  return alphabet.map((letter) => {
    const first = word.indexOf(letter);
    const last = word.lastIndexOf(letter);
    return first > -1 ? last - first + 1 : 0;
  });
};

module.exports = theJanitor;
