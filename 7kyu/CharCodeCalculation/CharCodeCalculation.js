calc = (x) => {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x.charCodeAt(i));
  }
  const seven = result
    .join("")
    .split("")
    .filter((x) => x == "7");
  const one = seven
    .map((x) => x.replace("7", "1"))
    .map((x) => +x)
    .reduce((a, b) => a + b, 0);
  return seven.map((x) => +x).reduce((a, b) => a + b, 0) - one;
};

module.exports = calc;
