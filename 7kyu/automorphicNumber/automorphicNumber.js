automorphic = (n) => {
  let unsquaredNumber = String(n);
  let squaredNumber = String(Math.pow(n, 2));
  return squaredNumber.includes(unsquaredNumber) && n != 10
    ? "Automorphic"
    : "Not!!";
};

module.exports = automorphic;
