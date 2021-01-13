maskify = (cc) => {
  const allDigits = cc.length;
  const lastFourDigits = cc.substr(-4, 4);
  return allDigits < 4
    ? lastFourDigits
    : "#".repeat(cc.length - 4) + `${lastFourDigits}`;
};

module.exports = maskify;
