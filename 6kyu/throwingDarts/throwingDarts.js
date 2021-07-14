scoreThrows = (radii) => {
  let score = 0;
  for (let i = 0; i < radii.length; i++) {
    if (radii[i] >= 5 && radii[i] <= 10) score += 5;
    if (radii[i] < 5) score += 10;
  }
  return radii.length === 0 || radii.some((elm) => elm > 5)
    ? score
    : score + 100;
};

module.exports = scoreThrows;
