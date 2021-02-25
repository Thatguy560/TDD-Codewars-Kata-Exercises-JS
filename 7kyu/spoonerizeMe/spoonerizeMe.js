spoonerize = (words) => {
  const reverseLetter = words
    .split(" ")
    .reverse()
    .map((x) => x[0]);
  const newWords = words.split(" ").map((x) => x.slice(1));
  return newWords.map((arr, i) => reverseLetter[i] + arr).join(" ");
};

module.exports = spoonerize;
