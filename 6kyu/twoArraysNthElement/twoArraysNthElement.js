twoArraysNthElement = (arr1, arr2, n) => {
  arr1.push(Infinity);
  arr2.push(Infinity);
  let i = 0;
  let j = 0;
  while (i + j < n) {
    arr1[i] < arr2[j] ? i++ : j++;
  }
  return Math.min(arr1[i], arr2[j]);
};

module.exports = twoArraysNthElement;
