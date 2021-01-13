validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin);

module.exports = validatePIN;
