twoSum = (numbers, target) => {
  const arrLength = numbers.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 1; j < arrLength; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i, j];
      }
    }
  }
};

module.exports = twoSum;
