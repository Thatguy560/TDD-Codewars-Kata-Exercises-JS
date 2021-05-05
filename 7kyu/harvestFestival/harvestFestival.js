plant = (seed, water, fert, temp) => {
  return temp >= 20 && temp <= 30
    ? ("-".repeat(water) + seed.repeat(fert)).repeat(water)
    : "-".repeat(water * water) + seed;
};

module.exports = plant;
