camelCase = (str) => {
  return str
    .split(" ")
    .filter((x) => x)
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join("");
};

module.exports = camelCase;
