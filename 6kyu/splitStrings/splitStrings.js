solution = (str) => {
  return str == "" ? [] : `${str}_`.match(/../g);
};

module.exports = solution;
