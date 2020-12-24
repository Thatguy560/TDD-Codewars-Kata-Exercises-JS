toAlternatingCase = (str) => {
  return str
    .split("")
    .map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("");
};

module.exports = toAlternatingCase;
