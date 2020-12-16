uniqueInOrder = (arr) => {
  return [...arr].filter((a, i) => a !== arr[i - 1]);
};

module.exports = uniqueInOrder;
