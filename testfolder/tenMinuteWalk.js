tenMinuteWalk = (walk) => {
  let walkLength = walk.length;
  if (walkLength === 10) {
    return true;
  } else {
    return false;
  }
};

// if (input % 3 === 0 && input % 5 === 0) {
//   return "FizzBuzz";
// } else if (input % 3 === 0) {
//   return "Fizz";
// } else if (input % 5 === 0) {
//   return "Buzz";
// } else {
//   return input.toString();
