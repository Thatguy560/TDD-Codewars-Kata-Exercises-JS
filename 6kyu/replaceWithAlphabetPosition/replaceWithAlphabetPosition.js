alphabetPosition = (text) => {
  let stringArr = text
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let numArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    numArr.push(alphabet.indexOf(stringArr[i]) + 1);
  }
  return numArr.filter((x) => x > 0).join(" ");
};

module.exports = alphabetPosition;
