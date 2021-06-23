lastSurvivor = (letters, coords) => {
  const lettersArr = [...letters];
  for (let i = 0; i < coords.length; i++) {
    lettersArr.splice(coords[i], 1);
  }
  return lettersArr.join("");
};

module.exports = lastSurvivor;
