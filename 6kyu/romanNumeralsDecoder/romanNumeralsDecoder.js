solution = (roman) => {
  let arr = ["I", "V", "X", "L", "C", "D", "M"];
  let values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  let prevIndex = 0; // Keeps track of previous index
  for (let i = roman.length - 1; i >= 0; i--) {
    // if the current letter is having greater index than previous letters than add values
    if (arr.indexOf(roman[i]) >= prevIndex) {
      sum += values[roman[i]];
    } else {
      // if the current letter is having lesser index than previous letter then sub values.
      sum -= values[roman[i]];
    }
    // Store the index of the previous roman letters.
    prevIndex = arr.indexOf(roman[i]);
  }
  return sum;
};

module.exports = solution;
