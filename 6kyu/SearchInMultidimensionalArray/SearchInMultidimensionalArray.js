locate = (arr, value) => {
  const flatten = (val) => {
    return [].concat(...val);
  };
  for (let i = 1; i <= 16; i++) {
    arr = flatten(arr);
  }
  return arr.indexOf(value) !== -1;
};

module.exports = locate;
