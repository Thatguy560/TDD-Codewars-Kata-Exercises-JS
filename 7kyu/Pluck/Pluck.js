pluck = (objs, name) => {
  return objs.map((obj) => {
    return obj[name];
  });
};

module.exports = pluck;
