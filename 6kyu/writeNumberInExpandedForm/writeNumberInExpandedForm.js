expandedForm = (num) => {
  const numStr = String(num).split("");
  for (let a = 0; a <= numStr.length; a++) {
    for (let b = numStr.length - a; b > 1; b--) {
      numStr[a] += "0";
    }
  }
  return numStr.filter((x) => x > 0).join(" + ");
};

module.exports = expandedForm;
