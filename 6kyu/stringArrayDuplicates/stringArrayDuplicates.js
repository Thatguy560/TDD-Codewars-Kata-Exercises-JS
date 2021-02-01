dup = (s) => {
  const newArr = s.join(" ").split("");
  const result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == newArr[i + 1]) continue;
    result.push(newArr[i]);
  }
  return result.join("").split(" ");
};

module.exports = dup;
