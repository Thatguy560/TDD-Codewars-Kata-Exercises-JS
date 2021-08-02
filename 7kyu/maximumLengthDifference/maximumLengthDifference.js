mxdiflg = (a1, a2) => {
  max = (arr) => Math.max(...arr.map((elm) => elm.length));
  min = (arr) => Math.min(...arr.map((elm) => elm.length));
  return !a1.length || !a2.length
    ? -1
    : Math.max(max(a1) - min(a2), max(a2) - min(a1));
};

module.exports = mxdiflg;
