findNextSquare = (sq) => {
  const nextPerfectSq = (Math.pow(sq, 0.5) + 1) ** 2;
  return nextPerfectSq % 1 ? -1 : nextPerfectSq;
};

module.exports = findNextSquare;
