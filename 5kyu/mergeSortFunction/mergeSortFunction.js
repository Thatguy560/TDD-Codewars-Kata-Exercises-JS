mergesorted = (a, b) => {
  const newArr = [...a, ...b];
  let temp = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i] < newArr[j]) {
        temp = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = temp;
      }
    }
  }
  return newArr;
};

module.exports = mergesorted;
