addArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    throw "ERROR";
  } else {
    return arr1.map((elm, inx) => elm + arr2[inx]);
  }
};

module.exports = addArrays;
