strToHash = (str) => {
  let result = {};
  if (str.length > 0) {
    let items = str.split(", ");
    items.map((item) => {
      let [key, val] = item.split("=");
      result[key] = +val; // + operator returns the numeric representation of the object.
    });
  }
  return result;
};

module.exports = strToHash;
