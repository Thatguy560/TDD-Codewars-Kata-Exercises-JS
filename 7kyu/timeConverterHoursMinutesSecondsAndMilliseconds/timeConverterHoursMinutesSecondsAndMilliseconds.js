convert = (time) => {
  const hoursMinutesSong = time.toString().slice(16, 24);
  const milliseconds = ("00" + time.getMilliseconds()).slice(-3);
  return `${hoursMinutesSong},${milliseconds}`;
};

module.exports = convert;
