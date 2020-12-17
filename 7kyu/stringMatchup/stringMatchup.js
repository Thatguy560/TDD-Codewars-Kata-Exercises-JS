solve = (a, b) => b.map((x) => a.filter((y) => y === x).length);

module.exports = solve;
