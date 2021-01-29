sequenceSum = (begin, end, step) => {
  const result = [];
  for (let i = begin; i <= end; i += step) {
    result.push(i);
  }
  return result.reduce((total, sum) => {
    return (total += sum);
  }, 0);
};

module.exports = sequenceSum;
