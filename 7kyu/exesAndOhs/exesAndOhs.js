XO = (str) => {
  let xs = str
    .toLowerCase()
    .split("")
    .filter((x) => x === "x").length;
  let os = str
    .toLowerCase()
    .split("")
    .filter((x) => x === "o").length;
  return xs == os ? true : false;
};

module.exports = XO;
