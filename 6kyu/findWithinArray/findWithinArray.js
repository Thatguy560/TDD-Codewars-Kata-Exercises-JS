findInArray = (arr, iterator) => {
  return arr.map(iterator).indexOf(true);
};

module.exports = findInArray;
