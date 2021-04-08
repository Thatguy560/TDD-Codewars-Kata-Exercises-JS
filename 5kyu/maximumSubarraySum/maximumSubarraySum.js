maxSequence = (arr) => {
  let currentSum = 0; // Keep track of current sum
  let maxSum = 0; // Keeps track of max sum
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i]; // Store current number in a variable
    currentSum = Math.max(currentSum + currentNum, 0); // Set currentSum accordingly
    maxSum = Math.max(maxSum, currentSum); // Set maxSum accordingly
  }
  return maxSum;
};

module.exports = maxSequence;
