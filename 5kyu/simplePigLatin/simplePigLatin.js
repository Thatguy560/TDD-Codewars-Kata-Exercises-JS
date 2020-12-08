pigIt = (str) => {
  let arr = str.split(" ");
  let specialAns = arr
    .map((s) => {
      return s.substr(1) + s.substr(0, 1) + "ay";
    })
    .join(" ")
    .slice(0, -2);
  let normalAns = arr
    .map((s) => {
      return s.substr(1) + s.substr(0, 1) + "ay";
    })
    .join(" ");
  return str.includes("?") || str.includes("!") ? specialAns : normalAns;
};

module.exports = pigIt;
