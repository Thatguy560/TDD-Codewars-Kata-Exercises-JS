range = (startNum, endNum) => {
  let result = [];
  for (let i = startNum + 1; i < endNum; i++) {
    result.push(i);
  }
  return result;
};

module.exports = range;
