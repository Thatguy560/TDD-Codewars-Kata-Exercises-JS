inArray = (a1, a2) => {
  let str = a2.join(" ");
  return a1.filter((s) => str.indexOf(s) !== -1).sort();
};

module.exports = inArray;
