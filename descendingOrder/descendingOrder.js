descendingOrder = (number) => {
  let Array = number.toString().split("");
  return parseInt(Array.sort((a, b) => b + a - (a + b)).join(""));
};
