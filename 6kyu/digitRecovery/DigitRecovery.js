recover = (str) => {
  const alph = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
  };
  const ans = [];
  for (let i = 0; i < str.length; i++) {
    for (let key of Object.keys(alph)) {
      const a = str
        .split("")
        .slice(i, i + key.length)
        .sort()
        .join("");
      const b = key.split("").sort().join("");
      if (a == b) {
        ans.push(alph[key]);
        break;
      }
    }
  }
  return ans.length > 0 ? ans.join("") : "No Digits Found";
};

module.exports = recover;
