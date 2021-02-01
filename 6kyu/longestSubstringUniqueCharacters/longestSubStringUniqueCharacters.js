longestSubstringOf = (s) => {
  let unique = [];
  let i = 0;
  const result = s.split("").reduce((arr, char) => {
    i = unique.indexOf(char);
    if (i !== -1) unique = unique.slice(i + 1);
    unique.push(char);
    !arr.includes(unique.length) && arr.push(unique.length);
    return arr;
  }, []);
  return Math.max(...result);
};

module.exports = longestSubstringOf;
