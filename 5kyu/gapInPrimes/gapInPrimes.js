gap = (g, m, n) => {
  let lastPrime = 0;
  isPrime = (x) => {
    // Create a method that loops through 2 to given number and checks if prime number or not.
    for (let i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };

  for (let i = m; i <= n; i++)
    if (isPrime(i)) {
      // If number is prime then run the if statement otherwise return null.
      if (i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }
  return null;
};

module.exports = gap;
