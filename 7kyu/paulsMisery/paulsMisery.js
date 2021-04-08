paul = (x) => {
  const SCORE = { eating: 1, kata: 5, "Petes kata": 10 };
  const result = x
    .filter((word) => word !== "life")
    .map((word) => SCORE[word])
    .reduce((a, b) => a + b, 0);
  if (result < 40) {
    return "Super happy!";
  } else if (result >= 40 && result < 70) {
    return "Happy!";
  } else if (result >= 70 && result < 100) {
    return "Sad!";
  } else {
    return "Miserable!";
  }
};
module.exports = paul;
