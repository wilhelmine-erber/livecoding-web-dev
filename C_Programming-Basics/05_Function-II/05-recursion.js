// 1. repetitive
// 2. it takes a modified copy of the original Data
// 3. it has an exit or termination condition

// analogy: 
// 1. google recursion
// 2. sope + rinsing
// 3. organization chart + christmas gifts


// countdown
let counter = 10;
while (counter > 0) {
  console.log(counter--);
}

// recursive contdown function
const countdown = function (value) {
  if (value > 0) {
    console.log(value);
    return countdown(value - 1);
  } else {
    return value;
  }
}

countdown(10);

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// ----------------------------------------------------

// factorial
const factor = function (number) {
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
};
console.log(factor(6)); // 720

// recursive factorial function
const factorial = function (number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};
console.log(factorial(6)); // 720

// https://www.sitepoint.com/recursion-functional-javascript/