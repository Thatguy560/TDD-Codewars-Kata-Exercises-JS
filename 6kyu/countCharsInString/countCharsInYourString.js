count = (str) => {
  const hash = {};
  Array.from(str).map((x) => {
    hash[x] = (hash[x] || 0) + 1;
  });
  return hash;
};

module.exports = count;
