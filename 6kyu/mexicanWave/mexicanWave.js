wave = (str) => {
  let result = [];
  let newArr = Array.from(str);
  for (i = 0; i < str.length; i++) {
    if (str[i] == " ") continue;
    result.push(newArr.map((x, j) => (i === j ? x.toUpperCase() : x)).join(""));
  }
  return result;
};

module.exports = wave;
