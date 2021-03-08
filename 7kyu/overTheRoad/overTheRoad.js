overTheRoad = (address, n) => {
  const identicalDifference = n - address;
  return n + identicalDifference + 1;
  //   return 2 * n - address + 1;
};

module.exports = overTheRoad;
