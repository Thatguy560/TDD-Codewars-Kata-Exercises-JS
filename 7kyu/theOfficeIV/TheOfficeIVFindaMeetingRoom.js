meeting = (x) =>
  x.join("").includes("O") ? x.indexOf("O") : "None available!";

module.exports = meeting;
