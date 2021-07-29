getMissingElement = (superImportantArray) => {
  for (let i = 0; i < 10; i++) {
    if (superImportantArray.indexOf(i) === -1) return i;
  }
};

module.exports = getMissingElement;
