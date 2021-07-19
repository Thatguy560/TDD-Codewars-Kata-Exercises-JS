toBinaryString = (number) => {
  const converted = [];
  while (number >= 1) {
    converted.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  return converted.join("") || "0";
};

module.exports = toBinaryString;
