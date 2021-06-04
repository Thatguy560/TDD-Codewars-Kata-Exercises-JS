isSameLanguage = (list) => {
  const languages = list.map((lang) => lang.language);
  return languages.every((val) => val == languages[0]);
};

module.exports = isSameLanguage;
