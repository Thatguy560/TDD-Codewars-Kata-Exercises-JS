findOutlier = (nums) => {
  const oddNums = nums.filter((num) => num % 2 !== 0);
  const evenNums = nums.filter((num) => num % 2 === 0);
  return oddNums.length > evenNums.length
    ? parseInt(evenNums.join(""))
    : parseInt(oddNums.join(""));
};

module.exports = findOutlier;
