toPretty = (seconds) => {
  const minutes = seconds / 60;
  const hours = parseInt(String(seconds / 3600).split(".")[0]);
  const days = parseInt(String(seconds / 86400).split(".")[0]);
  const week = parseInt(String(seconds / 604800).split(".")[0]);
  if (seconds === 0) return "just now";
  if (seconds === 1) return "a second ago";
  if (seconds < 60 && seconds > 1) return `${seconds} seconds ago`;
  if (seconds >= 60 && seconds < 120) return "a minute ago";
  if (seconds >= 120 && seconds < 3600) return `${minutes} minutes ago`;
  if (seconds >= 3600 && seconds < 7200) return "an hour ago";
  if (seconds >= 7200 && seconds < 86400) return `${hours} hours ago`;
  if (seconds >= 86400 && seconds < 172800) return "a day ago";
  if (seconds >= 172800 && seconds < 604800) return `${days} days ago`;
  if (seconds >= 604800 && seconds < 1209600) return "a week ago";
  if (seconds >= 1209600 && seconds <= 31449600) return `${week} weeks ago`;
};

module.exports = toPretty;
