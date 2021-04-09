sabb = (s, val, happiness) => {
  const newString = s
    .toLowerCase()
    .match(/[sabticl]/gi)
    .filter((letter) => letter !== null);
  const result = newString.length + val + happiness;
  return result > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
};

module.exports = sabb;
