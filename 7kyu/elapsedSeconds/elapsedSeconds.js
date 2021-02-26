elapsedSeconds = (startDate, endDate) => {
  const minsToSeconds = Math.abs(
    new Date(startDate).getMinutes() * 60 - new Date(endDate).getMinutes() * 60
  );
  const seconds = Math.abs(
    new Date(startDate).getSeconds() - new Date(endDate).getSeconds()
  );
  return minsToSeconds + seconds;
};

module.exports = elapsedSeconds;
