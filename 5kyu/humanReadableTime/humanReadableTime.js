humanReadable = (seconds) => {
  const H = ("0" + parseInt(seconds / (60 * 60))).slice(-2);
  const M = ("0" + parseInt((seconds / 60) % 60)).slice(-2);
  const S = ("0" + parseInt(seconds % 60)).slice(-2);
  return [H, M, S].join(":");
};

module.exports = humanReadable;
