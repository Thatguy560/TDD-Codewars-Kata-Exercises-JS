hasUniqueChars = (str) => {
  const strArr = Array.from(str);
  return [...new Set(strArr)].length == strArr.length;
};

module.exports = hasUniqueChars;
