list = (names) => {
  let nameArr = [];
  for (let i = 0; i < names.length; i++) {
    nameArr.push(names[i].name);
  }
  const lastValue = nameArr.slice(-1)[0];
  const firstValues = nameArr.slice(0, -1).join(", ");
  const firstName = nameArr[0];
  const secondName = nameArr[1];
  if (nameArr.length >= 3) {
    return `${firstValues} & ${lastValue}`;
  } else if (nameArr.length == 2) {
    return `${firstValues} & ${secondName}`;
  } else if (nameArr.length == 1) {
    return firstName;
  } else {
    return "";
  }
};

module.exports = list;
