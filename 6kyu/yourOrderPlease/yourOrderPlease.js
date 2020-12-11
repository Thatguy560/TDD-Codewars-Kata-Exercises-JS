order = (words) => {
  const customSort = (a, b) => {
    return Number(a.match(/(\d+)/g)[0]) - Number(b.match(/(\d+)/g)[0]);
  };
  return words.split(" ").sort(customSort).join(" ");
};

module.exports = order;
