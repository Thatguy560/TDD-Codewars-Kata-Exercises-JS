isAgeDiverse = (list) => {
  const arr = list.map((a) => a.age);
  return (
    arr.some((a) => 19 >= a && a >= 13) &&
    arr.some((a) => 29 >= a && a >= 20) &&
    arr.some((a) => 39 >= a && a >= 30) &&
    arr.some((a) => 49 >= a && a >= 40) &&
    arr.some((a) => 59 >= a && a >= 50) &&
    arr.some((a) => 69 >= a && a >= 60) &&
    arr.some((a) => 79 >= a && a >= 70) &&
    arr.some((a) => 89 >= a && a >= 80) &&
    arr.some((a) => 99 >= a && a >= 90) &&
    arr.some((a) => a >= 100)
  );
};

module.exports = isAgeDiverse;

// The some() method tests whether at least one element in
// the array passes the test implemented by the provided
// function.
