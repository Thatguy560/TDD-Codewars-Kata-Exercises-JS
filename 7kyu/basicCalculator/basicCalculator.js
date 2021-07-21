calculate = (num1, operation, num2) => {
  let operators = ["*", "+", "-", "/"];
  return operators.slice(0, 3).every((elem) => elem !== operation) && num2 === 0
    ? null
    : Number(eval(`${num1}${operation}${num2}`));
};

module.exports = calculate;
