keysAndValues = (data) => {
  let values = Object.values(data);
  let keys = Object.keys(data);
  return [keys, values];
};

module.exports = keysAndValues;
