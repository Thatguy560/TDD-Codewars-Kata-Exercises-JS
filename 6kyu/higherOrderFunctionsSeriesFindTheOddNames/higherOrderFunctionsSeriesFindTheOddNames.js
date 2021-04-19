findOddNames = (list) => {
  return list.filter((el) => {
    return (
      el.firstName.split("").reduce((r, e) => r + e.charCodeAt(0), 0) % 2 !== 0
    );
  });
};

module.exports = findOddNames;
