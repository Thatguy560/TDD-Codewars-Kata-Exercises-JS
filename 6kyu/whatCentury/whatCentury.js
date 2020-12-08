whatCentury = (year) => {
  let century = Math.ceil(year / 100);
  return (
    century +
    (century < 20 ? "th" : ["th", "st", "nd", "rd"][century % 10] || "th")
  );
};

module.exports = whatCentury;

// ceil always rounds a number up to the next largest integer.
