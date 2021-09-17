uncollapse = (digits) => {
  return digits
    .match(/zero|one|two|three|four|five|six|seven|eight|nine/g)
    .join(" ");
};

module.exports = uncollapse;
