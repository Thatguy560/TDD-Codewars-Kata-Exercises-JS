tenMinuteWalk = (walk) => {
  let n = walk.filter((item) => {
    return item === "n";
  });
  let s = walk.filter((item) => {
    return item === "s";
  });
  let e = walk.filter((item) => {
    return item === "e";
  });
  let w = walk.filter((item) => {
    return item === "w";
  });
  return walk.length == 10 && n.length == s.length && e.length == w.length
    ? true
    : false;
};

module.exports = tenMinuteWalk;
