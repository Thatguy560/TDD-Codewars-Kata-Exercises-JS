maxRot = (n) => {
  const arr = n.toString().split("");
  let listOfNums = [];
  let num = 0;
  while (num < arr.length) {
    const newNumber = arr.splice(num, 1);
    arr.push(Number(newNumber));
    listOfNums.push(Number(arr.join("")));
    num++;
  }
  listOfNums.unshift(n);
  return listOfNums.sort((a, b) => b - a)[0];
};

module.exports = maxRot;
