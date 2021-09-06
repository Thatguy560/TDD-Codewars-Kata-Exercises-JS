sequenceSum = (count) => {
  let sumArr = [];
  for (let i = 0; i <= count; i++) {
    sumArr.push(i);
  }
  const sum = sumArr.reduce((a, b) => a + b, 0);
  let result = "";
  for (let i = 0; i <= count; i++) {
    result += `${i}+`;
  }
  if (count == 0) return "0=0";
  if (count > 1) return `${result.slice(0, -1)} = ${sum}`;
  if (count < 0) return `${count}<0`;
};

module.exports = sequenceSum;
