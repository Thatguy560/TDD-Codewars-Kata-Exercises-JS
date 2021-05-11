wordToBin = (str) =>
  [...str].map((x) => x.charCodeAt(0)).map((x) => "0" + (x >>> 0).toString(2));

module.exports = wordToBin;
