// Implicit & Explicit Coersion

// Implicit Coersion
console.log("1" > 2);   // false. JS compiler removed the quotes and treated "1" as a number.

// Explicit Coersion
// to String
const myNum = 20;
const coersedNum = String(myNum);    // coersion from number to string
console.log(coersedNum === myNum); // false
console.log(typeof coersedNum);    // string

// to Number
const myString = "20";
console.log(typeof myString);       // string
const coersedString = Number(myString);
console.log(typeof coersedString);  // number

// to Boolean
const myNum2 = 30;
const coersedNum2 = Boolean(myNum2);
console.log(typeof coersedNum2);    // boolean
