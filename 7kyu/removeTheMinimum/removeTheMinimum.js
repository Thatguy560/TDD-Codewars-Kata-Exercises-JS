removeSmallest = (numbers) => {
  const minNumber = Math.min.apply(null, numbers);
  const minIndex = numbers.indexOf(minNumber);
  return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
};

module.exports = removeSmallest;
