number = (busStops) => {
  let totalCount = 0;
  for (i = 0; i < busStops.length; i++) {
    totalCount += busStops[i][0];
    totalCount -= busStops[i][1];
  }
  return totalCount;
};

module.exports = number;
