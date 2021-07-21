solution = (value) => {
  const numLength = value.toString().length;
  return `Value is ${"0".repeat(5 - numLength)}${value}`;
};

module.exports = solution;
