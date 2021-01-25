countSmileys = (arr) => {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
};

module.exports = countSmileys;
