sortArray = (arr) => {
  let odds = arr.filter((x) => x % 2).sort((a, b) => a - b);
  return arr.map((x) => (x % 2 != 0 ? odds.shift() : x));
};

module.exports = sortArray;
