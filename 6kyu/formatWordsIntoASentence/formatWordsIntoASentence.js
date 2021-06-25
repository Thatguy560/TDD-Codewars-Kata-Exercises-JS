formatWords = (words) => {
  const filtered = (words || []).filter((elm) => elm !== "");
  const arr = filtered.join(" ").split(" ");
  const lastWord = arr.slice(-1)[0];
  const firstWords = arr.slice(0, -1).join(", ");
  return filtered.length <= 1 ? arr.join("") : `${firstWords} and ${lastWord}`;
};

module.exports = formatWords;
