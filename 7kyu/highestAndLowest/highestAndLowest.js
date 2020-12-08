highAndLow = (numbers) => {
  let arr = numbers.split(" ").map((x) => +x);
  let max = Math.max.apply(Math, arr);
  let min = Math.min.apply(Math, arr);
  return `${max} ${min}`;
};

module.exports = highAndLow;
