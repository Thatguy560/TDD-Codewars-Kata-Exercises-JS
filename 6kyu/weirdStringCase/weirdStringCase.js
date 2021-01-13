toWeirdCase = (string) => {
  return string
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, index) => {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
};

module.exports = toWeirdCase;
