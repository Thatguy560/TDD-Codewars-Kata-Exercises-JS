alternativeCase = (str) => {
  let arr = str.split("");
  let ans = arr
    .map((c) => {
      return c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    })
    .join("");
  return ans;
};
