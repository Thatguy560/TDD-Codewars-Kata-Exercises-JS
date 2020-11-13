middleCharacter = (word) => {
  let middle = word.length / 2;
  let wl = word.length;
  return wl % 2 !== 0
    ? word.slice(middle, middle + 1)
    : word.slice(middle - 1, middle + 1);
};
