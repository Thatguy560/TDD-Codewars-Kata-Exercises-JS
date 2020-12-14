capitals = (word) => {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[A-Z]/)) arr.push(i);
  }
  return arr;
};

module.exports = capitals;
