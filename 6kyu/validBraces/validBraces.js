validBraces = (braces) => {
  for (let i = 0; i < braces.length * 3; i++) {
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0 ? true : false;
};
