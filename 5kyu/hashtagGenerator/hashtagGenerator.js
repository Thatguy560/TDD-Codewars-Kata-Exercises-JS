generateHashTag = (str) => {
  const wordArr = str.split(" ").filter((x) => x != "");
  const string = wordArr.join("").split("");
  const hashTag =
    "#" + wordArr.map((x) => x[0].toUpperCase() + x.substr(1)).join("");
  return string.length >= 140 || string == "" ? false : hashTag;
};

module.exports = generateHashTag;
