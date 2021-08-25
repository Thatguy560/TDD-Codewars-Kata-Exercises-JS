rot13 = (message) => {
  const alphabetToCipher =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(
    /[a-z]/gi,
    (letter) => alphabetToCipher[alphabetToCipher.indexOf(letter) + 13]
  );
};

module.exports = rot13;
