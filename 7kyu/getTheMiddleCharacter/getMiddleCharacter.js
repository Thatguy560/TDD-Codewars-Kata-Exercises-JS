getMiddle = (word) => {
  const wl = word.length;
  const middle = wl / 2;
  return wl % 2 !== 0
    ? word.slice(middle, middle + 1)
    : word.slice(middle - 1, middle + 1);
};

module.exports = getMiddle;
