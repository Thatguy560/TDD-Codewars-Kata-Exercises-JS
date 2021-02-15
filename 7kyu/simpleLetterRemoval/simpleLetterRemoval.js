solve = (s, k) => {
  const newArr = s.split("").sort().slice(0, k);
  for (let i = 0; i < newArr.length; i++) s = s.replace(newArr[i], "");
  return s;
};

module.exports = solve;
