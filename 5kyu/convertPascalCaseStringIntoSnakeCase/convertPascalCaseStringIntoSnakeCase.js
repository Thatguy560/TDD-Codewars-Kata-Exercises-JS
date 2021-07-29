toUnderscore = (str) => {
  return String(str)
    .split(/(?=[A-Z])/)
    .map((x) => x.toLowerCase())
    .join("_");
};

module.exports = toUnderscore;
