jumbleSentence = (input) => {
  let capitalizedIndex;
  let words = input.split(" ");
  let endword = [];
  let addFullStop = true;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === word[j].toUpperCase()) {
        capitalizedIndex = j;
        word = word.toLowerCase().split("").sort();
        let capitalLetter = word[capitalizedIndex].toUpperCase();
        word[capitalizedIndex] = capitalLetter;
        console.log(word[capitalizedIndex]);
        word = word.join("");
        endword.push(word);
      }
      word = word.split("").sort();
      console.log(word);
      if (word.includes(".") && addFullStop) {
        word.push(word.shift());
        addFullStop = false;
      }
      word = word.join("");
      if (!endword.includes(word)) {
        endword.push(word);
      }
    }
  }
  endword.pop();
  endword = endword.join(" ");
  return endword;
};

module.exports = jumbleSentence;
