findUniq = (arr) =>
  Number(arr.filter((x) => arr.indexOf(x) == arr.lastIndexOf(x)).join(""));

module.exports = findUniq;
