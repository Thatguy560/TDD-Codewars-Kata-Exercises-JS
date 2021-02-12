gordon = (a) => {
  const newStr = a
    .toUpperCase()
    .split(" ")
    .map((x) => `${x}!!!!`)
    .join(" ");
  result = newStr.replace(/[A]/gi, "@");
  result = result.replace(/[eiou]/gi, "*");
  return result;
};

module.exports = gordon;
