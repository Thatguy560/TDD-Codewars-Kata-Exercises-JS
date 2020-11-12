reverse = (n) => {
  let revNum = 0;
  while (n > 0) {
    revNum = revNum * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return revNum;
};
