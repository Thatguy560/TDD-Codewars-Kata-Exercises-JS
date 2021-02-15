bears = (x, s) => {
  const pairs = s.match(/(8B)|(B8)/g) || [];
  return [pairs.join(""), pairs.length >= x];
};

module.exports = bears;
