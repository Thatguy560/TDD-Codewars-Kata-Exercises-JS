solution = (hour) => {
  const hstr = hour.toString().split("");
  const firstOne = hstr[0];
  const firstTwo = hstr.slice(0, 2).join("");
  const lastTwo = hstr.slice(-2).join("");
  if (hstr.length > 4 || hstr.length < 3) {
    throw "WTF";
  } else if (hstr.length == 3) {
    return `${firstOne}:${lastTwo}`;
  } else {
    return `${firstTwo}:${lastTwo}`;
  }
};
