tenMinuteWalk = (walk) => {
  const n = walk.filter((dir) => dir == "n").length;
  const e = walk.filter((dir) => dir == "e").length;
  const s = walk.filter((dir) => dir == "s").length;
  const w = walk.filter((dir) => dir == "w").length;
  return walk.length == 10 && n == s && e == w;
};

module.exports = tenMinuteWalk;
