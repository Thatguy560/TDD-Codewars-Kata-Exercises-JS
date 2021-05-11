firstNonConsecutive = (arr) => {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) result.push(arr[i + 1]);
  }
  return result[0] == undefined ? null : result[0];
};

module.exports = firstNonConsecutive;
