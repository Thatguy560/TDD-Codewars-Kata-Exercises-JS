capitalize = (s) => {
  const firstArr = [];
  const secondArr = [];
  Array.from(s).map((a, i) => {
    if (i % 2 == 0) firstArr.push(a.toUpperCase());
    if (i % 2 !== 0) firstArr.push(a);
    if (i % 2 == 0) secondArr.push(a);
    if (i % 2 !== 0) secondArr.push(a.toUpperCase());
  });
  return [firstArr.join(""), secondArr.join("")];
};

module.exports = capitalize;
