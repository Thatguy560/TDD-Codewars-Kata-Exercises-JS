addArrays = (array1, array2) => {
  let arrayToNumber1 = parseInt(array1.join(""));
  let arrayToNumber2 = parseInt(array2.join(""));
  let finalNumber = arrayToNumber1 + arrayToNumber2;
  if (array1.length == 0 && array2.length == 0) {
    return [];
  } else if (array2.length == 0) {
    return array1;
  } else if (array1.length == 0) {
    return array2;
  } else {
    return finalNumber.toString().match(/-?\d/g).map(Number);
  }
};

module.exports = addArrays;
