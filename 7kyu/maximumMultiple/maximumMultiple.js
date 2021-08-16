maxMultiple = (div, bound) => {
  while (bound % div !== 0) {
    bound--;
  }
  return bound;
};

module.exports = maxMultiple;
