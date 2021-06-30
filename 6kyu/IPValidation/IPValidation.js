isValidIP = (str) => {
  return (
    str.split(".").filter((v) => {
      return v == Number(v).toString() && Number(v) < 256 && Number(v) >= 0;
    }).length == 4
  );
};

module.exports = isValidIP;
