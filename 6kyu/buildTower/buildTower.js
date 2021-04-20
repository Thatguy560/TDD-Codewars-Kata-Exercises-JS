towerBuilder = (nFloors) => {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    const space = " ".repeat(nFloors - i - 1);
    tower.push(space + "*".repeat(i * 2 + 1) + space);
  }
  return tower;
};

module.exports = towerBuilder;
