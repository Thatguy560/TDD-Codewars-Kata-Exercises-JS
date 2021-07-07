camelize = (str) => {
  return (str.match(/[a-z0-9]+/gi) || [])
    .map((elm) => {
      return elm[0].toUpperCase() + elm.slice(1).toLowerCase();
    })
    .join("");
};

module.exports = camelize;
