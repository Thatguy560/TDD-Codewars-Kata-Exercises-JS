findMissingLetter = (arr) => {
  const str = arr.join("");
  let missingLetter;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      missingLetter = String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
  return missingLetter;
};

module.exports = findMissingLetter;
