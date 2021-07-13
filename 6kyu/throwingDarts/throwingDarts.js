scoreThrows = (radii) => {
  let score = 0;
  for (let i = 0; i < radii.length; i++) {
    if (radii[i] >= 5 && radii[i] <= 10) score += 5;
    if (radii[i] < 5) score += 10;
  }
  if (radii.length === 0) {
    return score;
  } else if (radii.every((elm) => elm < 5)) {
    return score + 100;
  } else {
    return score;
  }
};

module.exports = scoreThrows;
