solve = (arr) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(
    (x) =>
      x
        .toLowerCase()
        .split("")
        .filter((elm, index) => index == alphabet.indexOf(elm)).length
  );
};

module.exports = solve;
