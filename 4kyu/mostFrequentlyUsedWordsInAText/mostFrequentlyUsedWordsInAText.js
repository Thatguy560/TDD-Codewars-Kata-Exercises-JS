topThreeWords = (text) => {
  let freqMap = {};
  let words = text
    .split(" ")
    .map((x) => x.replace(/[^\A-Za-z0-9']/g, ""))
    .filter((x) => x !== "")
    .map((x) => x.toLowerCase());
  words.forEach((w) => {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w]++;
  });
  let sortable = Object.entries(freqMap)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  return text === "  '  " ? [] : Object.keys(sortable).slice(0, 3);
};

module.exports = topThreeWords;
