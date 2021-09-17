duplicateEncode = (word) => {
  return [...word.toLowerCase()]
    .map((element, _, array) => {
      return array.indexOf(element) === array.lastIndexOf(element) ? "(" : ")";
    })
    .join("");
};

module.exports = duplicateEncode;
