// NUMBERS
// More ways to write a number:
// In JavaScript, we shorten a number by appending the letter "e" to the number and specifying the zeroes count:
// In other words, "e" multiplies the number by 1 with the given zeroes count.

const billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
console.log(billion);   // 1000000000

console.log(1.23e6);   // 1.23 * 1000000 = 1230000

// Now const’s write something very small. Say, 1 microsecond (one millionth of a second): 0.000001

const microSecond = 1e-6;     // 0.000001: six zeroes to the left from 1
// If we count the zeroes in 0.000001, there are 6 of them. So naturally it’s 1e-6.

//----------------####---------------
// toFixed()
const sum = 0.1 + 0.2;
console.log(sum);   // 0.30000000000000004

const fixSum = sum.toFixed(2);
console.log(fixSum);    // 0.30

// toFixed always returns a string
console.log(typeof(fixSum));    // string

//----------------####---------------
// Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// NaN represents an error.
// They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:
// 1. isNaN(value) converts its argument to a number and then tests it for being NaN:

console.log(isNaN(NaN));    // true
console.log(isNaN("str"));    // true

// The value NaN is unique in that it does not equal anything, including itself:
console.log( NaN === NaN ); // false
// but...
console.log(typeof(NaN));    // number

// 2. isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

console.log( isFinite("15") );      // true
console.log( isFinite("str") );     // false, because a special value: NaN
console.log( isFinite(Infinity));   // false, because a special value: Infinity

//----------------####---------------
// parseInt and parseFloat

console.log(typeof("100px"));   // string or NaN

// But in real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.
// parseInt() and parseFloat() “read” a number from a string until they can’t.
// The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

console.log( parseInt('100px'));        // 100
console.log( parseFloat('12.5em') );    // 12.5

// There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:
console.log( parseInt('a123') );        // NaN, the first symbol stops the process