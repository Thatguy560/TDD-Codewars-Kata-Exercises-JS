makeSentence = (parts) => {
  let newString = parts.filter((x) => x !== ".").join(" ") + ".";
  for (let i = 0; i <= 3; i++) {
    newString = newString.replace(" ,", ",");
  }
  return newString;
};

module.exports = makeSentence;
