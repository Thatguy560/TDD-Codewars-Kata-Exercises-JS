insideOut = (x) => {
  return x
    .split(" ")
    .map((word) => {
      const halfWordLength = word.length / 2;
      // Get the starting letters of word
      const start = word.slice(0, halfWordLength).split("").reverse().join("");
      // If word is odd in length then get middle character but if even then return empty string.
      const centre = word.length % 2 !== 0 ? word.charAt(halfWordLength) : "";
      // Get the ending letters of word
      const end = word
        .slice(Math.ceil(halfWordLength))
        .split("")
        .reverse()
        .join("");
      return start + centre + end;
    })
    .join(" ");
};

module.exports = insideOut;
