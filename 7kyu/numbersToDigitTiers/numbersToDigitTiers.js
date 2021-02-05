createArrayOfTiers = (num) => {
  const length = num.toString().length;
  let resultArr = [];
  for (let i = 0; i < length; i++) {
    resultArr.push(num.toString().substring(0, i + 1));
  }
  return resultArr;
};

module.exports = createArrayOfTiers;
