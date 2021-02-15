calculate1RM = (w, r) => {
  const Epley = Math.round(w * (1 + r / 30));
  const McGlothin = Math.round((100 * w) / (101.3 - 2.67123 * r));
  const Lombardi = Math.round(w * Math.pow(r, 0.1));
  return r <= 1 ? r * w : Math.max(Epley, McGlothin, Lombardi);
};

module.exports = calculate1RM;
