// STRINGS
const myString = "It is a beautiful day!";

console.log(myString);  // It is a beautiful day!
// bracket notation for strings
console.log(myString[0]);   // I
console.log(myString[1]);   // t
console.log(myString[2]);   // space

// length
// dot notation
console.log(myString.length);   // 22

const str1 = "25";
console.log(str1[1]);   // 5

// NUMBERS
// 1. Integer
// 2. Float
// 3. + Infinity
// 4. - Infinity
// 5. NaN

const myNum = 50;    // integer
const numTwo = 2.22; // float
console.log(50 * Infinity); // Infinity
console.log(50 / Infinity); // 0

console.log(myString - 2);  // NaN
console.log(str1 - 2);      // 23

// Booleans

const booleanOne = true;
const booleanTwo = false;
const undefinedVariable;

console.log(Boolean(booleanOne)); // true
console.log(Boolean(booleanTwo)); // false
console.log(Boolean(myNum));    // true
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(" "));    // true
console.log(Boolean(""));    // false
console.log(Boolean(undefinedVariable));    // false. undefinedVariable is undefined
console.log(Boolean(false));    // false
console.log(Boolean("false"));    // true

console.log(Boolean(NaN));    // false
console.log(Boolean(null));    // false

// UNDEFINED

const myPicture = "My Picture";
let profilePic;

console.log(profilePic);  // undefined or value is not assigned.

profilePic = myPicture;
console.log(profilePic);    // value from myPicture

// NULL: nothing, empty, unknown value

const age = null;
const emptyString = null;
console.log(emptyString);

// typeof operator
console.log(typeof booleanOne); // boolean
console.log(typeof true);       // boolean
console.log(typeof "true");     // string
console.log(typeof "1");        // string
console.log(typeof 1);          // number
console.log(typeof undefined);  // undefined
console.log(typeof undefinedVariable);  // undefined