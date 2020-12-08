selReverse = (array, length) => {
  if (length == 0) {
    return array;
  }
  let newArr = [];
  for (let i = 0; i < array.length; i += length) {
    newArr.push(...array.slice(i, i + length).reverse());
  } // the ...converts multi dimensional array to regular array.
  return newArr;
};

module.exports = selReverse;
