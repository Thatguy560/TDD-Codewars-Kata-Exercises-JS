isolateIt = (arr) => {
  return arr.map(
    (s) => s.slice(0, s.length / 2) + "|" + s.slice(-s.length / 2)
  );
};

module.exports = isolateIt;
