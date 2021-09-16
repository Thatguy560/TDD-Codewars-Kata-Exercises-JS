removeDuplicateWords = (s) => [...new Set(s.split(" "))].join(" ");

module.exports = removeDuplicateWords;
