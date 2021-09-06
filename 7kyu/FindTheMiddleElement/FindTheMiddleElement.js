gimme = (arr) => {
  return arr.indexOf(
    arr.concat().sort((a, b) => {
      return a - b;
    })[1]
  );
};

module.exports = gimme;
