number = (arr) => {
  return arr.map((elm, inx) => {
    return `${inx + 1}: ${elm}`;
  });
};

module.exports = number;
