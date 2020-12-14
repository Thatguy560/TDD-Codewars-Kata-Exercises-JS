findDeletedNumber = (arr, mixArr) => {
  let sortedArrSum = mixArr.reduce((a, b) => a + b, 0);
  return arr.length < 1 ? 0 : arr.reduce((a, b) => a + b) - sortedArrSum;
};

module.exports = findDeletedNumber;
