mygcd = (firstNum, secondNum) => {
  return secondNum ? mygcd(secondNum, firstNum % secondNum) : firstNum;
};

module.exports = mygcd;
