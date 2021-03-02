shifter = (s) => {
  return new Set(s.match(/\b[HINOSXZMW]+\b/g)).size;
};

module.exports = shifter;
