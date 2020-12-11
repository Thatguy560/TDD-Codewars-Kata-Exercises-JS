doubleChar = (str) => {
  let doubleString = str.split("").map((x) => `${x}${x}`);
  return doubleString.join("");
};

module.exports = doubleChar;
