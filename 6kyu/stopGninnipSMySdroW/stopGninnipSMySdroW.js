spinWords = (word) => {
  return word
    .split(" ")
    .map((x) => {
      const arr = x.split("");
      return x.length >= 5 ? arr.reverse() : arr;
    })
    .join(" ")
    .split(",")
    .join("");
};

module.exports = spinWords;
