points = (games) => {
  let score = 0;
  for (let i = 0; i < games.length; i++) {
    const x = Number(games[i][0]),
      y = Number(games[i][2]);
    if (x > y) score += 3;
    if (x == y) score += 1;
  }
  return score;
};

module.exports = points;
