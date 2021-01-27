validate = (n) => {
  const cardLength = String(n).split("").length;
  const cardArr = String(n)
    .split("")
    .map((x) => +x);
  const newArr = [];
  const otherArr = [];
  cardArr.map((a, i) => {
    if (i % 2 == 0 && cardLength % 2 == 0) newArr.push(a * 2);
    if (i % 2 == 0 && cardLength % 2 !== 0) newArr.push(a);
    if (i % 2 !== 0 && cardLength % 2 == 0) otherArr.push(a);
    if (i % 2 !== 0 && cardLength % 2 !== 0) otherArr.push(a * 2);
  });
  const doubledNums = newArr.concat(otherArr);
  const finalArray = [];
  doubledNums.map((x) => {
    if (x > 9) finalArray.push(x - 9);
    if (x <= 9) finalArray.push(x);
  });
  let sum = finalArray.reduce((sum, current) => (sum += current), 0);
  return sum % 10 == 0 ? true : false;
};

module.exports = validate;
