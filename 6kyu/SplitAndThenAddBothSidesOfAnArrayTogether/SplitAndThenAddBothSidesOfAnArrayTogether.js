// splitAndAdd = (arr, n) => {
//   if (n < 1 || arr.length == 1) return arr;
//   if (arr.length % 2) arr.unshift(0);
//   // Not sure why splice isn't working. Works on Codewars but won't work here.
//     arr = arr.splice(0, Math.ceil(arr.length / 2)).map((x, i) => x + arr[i]);
//     return splitAndAdd(arr, n - 1);
// };

// module.exports = splitAndAdd;
