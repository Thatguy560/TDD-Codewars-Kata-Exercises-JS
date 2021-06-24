scale = (str, k, n) => {
  return str
    .replace(/[^\n]/g, (c) => Array(k + 1).join(c))
    .replace(/[^\n]+/g, (c) =>
      Array(n + 1)
        .join("\n" + c)
        .slice(1)
    );
};

module.exports = scale;
