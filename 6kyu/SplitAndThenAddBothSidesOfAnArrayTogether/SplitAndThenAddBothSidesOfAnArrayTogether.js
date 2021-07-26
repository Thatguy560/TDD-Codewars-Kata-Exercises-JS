splitAndAdd = (arr, n) => {
  if (n < 1 || arr.length == 1) return arr;
  if (arr.length % 2) arr.unshift(0);
  arr = arr.slice(1, Math.ceil(arr.length / 2)).map((x, i) => x + arr[i]);
  return splitAndAdd(arr, n - 1);
};

module.exports = splitAndAdd;
