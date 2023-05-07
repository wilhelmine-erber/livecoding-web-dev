// Conditional Statements if-else

// Logical Thinking:
// //Sunny
// 1. if sunny dress in shorts and light top
// 2. if sunny wear a face cap or hat
// //Rainy
// 1. if rainy take along an umbrella
// 2. if rainy wear a raincoat
// 3. if rainy use a car where possible
// // Cloudy
// 1. if cloudy  dress in your finest as possible
// 2. if cloudy  wear any shoes of your choice
// // Snow
// 1. if snow wear a winter jacket or mantle
// 2. if snow wear a snow boot
// 3. if snow check the traffic before going out

// let weather = 'Sunny';

// if (weather === 'Sunny') {
//     console.log("Bring your sun glasses.");     // Bring your sun glasses.
// }

// if (weather === 'Rainy') {
//     console.log('Carry an umbrella.');
// }

// if (weather === 'Snowy') {
//     console.log('Wear a snow jacket');
// }

// Sometimes, we need to perform different actions based on different conditions.
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

// 1.
// Input: 21 and 3.
// if 21 is divisible by 3 then print- Yes, 21 is a multiple of 3
// if 21 is not divisible by 3 then print- No, 21 is not a multiple of 3

if (21 % 3 === 0) {
    console.log('yes, 21 is a multiple of 3!'); 
} else {
    console.log('no, 21 is not a multiple of 3!'); 
}   // yes, 21 is a multiple of 3!

// ---------###--------
// 2.
// Input: varA and varB
// if varA is not equal to varB, print- Booleans are not equal to strings!
// else, print- Booleans are equal to strings!

let varA = false;

let varB = "false";

// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
if (varA != varB) {
    console.log("Booleans are not equal to strings!");
    
} else {
    console.log("Booleans are equal to strings!");
}
// Booleans are not equal to strings!

// ---------###--------
// 3.
// We can also pass a pre-evaluated boolean value to if, like this:

// Input: year and cond
// If the condition is true, then print - Yes, it is 2020.
// else, print- You are not up to date.
let year = 2020;
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  console.log(`it's ${year}`);
} else {
    console.log('You are not up to date!');
}                                           
// You are not up to date!

// ---------###--------
// 4.
// Sometimes, we need to assign a variable depending on a condition.

// Input: age
// if age is grater than 18, then allow access (accessAllowed is true)
// else deny access (accessAllowed is false)

let accessAllowed;
let age = 25;

// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);     // true

// ---------###--------
// 5.


let time = 21;
let greeting;

if (time < 10) {
    greeting = "Good morning!"
} else {
    greeting = "Good evening!"
}
console.log(greeting);  // Good evening!

// ---------###--------
// 6.

// Input: company, language, statementTrue and statementFalse
// if the company is Netscape, print true statement
// else print false statement

let company = 'Netscape';
let language = 'JavaScript';
let statementTrue = `${company} created ${language}.`;
let statementFalse = `${company} did not create ${language}.`;

if (company == 'Netscape') {
  console.log(`${statementTrue}`);
} else {
  console.log(`${statementFalse}`); 
}       // Netscape created JavaScript.

// ---------###--------
// 7.

// Inputs:
// weather
// tan

// Possible Outputs:
// "Don't forget your sunglasses!"
// "Don't forget your sunblocker"
// "enjoy!"
// "Don't forget your umbrella!"

// if weather is sunny OR weather is snowy, print - "Don't forget your sunglasses!"
// if you don't want a tan, print "Don't forget your sunblocker", else print "enjoy!"
// else print "Don't forget your umbrella!"

let weather = 'sunny';
if (weather === "sunny" || weather === "snowy") { // MUST PUT CURLIES ;) 
    // start a block scope
    // true case
    console.log("Don't forget your sunglasses!");   // Don't forget your sunglasses!
    // Skipping unmet cases => omitting if not the case! 
    let noToTan = true;
    if (noToTan === true) {
        console.log("Don't forget your sunblocker!");   // Don't forget your sunblocker!
    } else {
        console.log("Enjoy!");
    }
    // SyntaxError: Unexpected token '}' => }
    // Syntax debugging have a look at the curlies again! {}
} else {
    // the default case => Fallback 
    // false case 
    console.log("Don't forget your umbrella!");
}

// ---------###-----------------###--------
// Several conditions: “else if”

// 1.

// Input:
// time2

// If time is less than 10, greeting is "Good morning!", print greeting.
// If time is grater than/equal to 10 AND less than 20, greeting is "Good day!", print greeting.
// Else greeting is "Good evening!", print greeting.
let time2 = 21;
let greeting2;

if (time2 < 10) {
    greeting2 = "Good morning!"
} else if ((time2 >= 10) && (time2 < 20)) {
    greeting2 = "Good day!"
} else {
    greeting2 = "Good evening!"
}

console.log(greeting2);     // Good evening!

// ---------###--------
// 2. 
let firstName = 'John';
let agE = 25;

// Input: first name and age

// If age is less than 13, print ${firstname} is a kid.
// If age is grater than/equal to 13 AND less than 20, print ${firstname} is a teenager.
// If age is grater than/equal to 20 AND less than 30, print ${firstname} is a young man.
// Else print ${firstname} is a man.

if (agE < 13) {
    console.log(`${firstName} is a kid.`);
} else if ((agE >= 13) && (agE < 20)) {
    console.log(`${firstName} is a teenager.`);
} else if ((agE >= 20) && (agE < 30)) {
    console.log(`${firstName} is a young man.`);
} else {
    console.log(`${firstName} is a man.`);
}       // John is a young man.

// ---------###--------
// 3.

// Inputs:
// weather
// tan

// Possible Outputs:
// "Don't forget your sunglasses!"
// "Don't forget your sunblocker"
// "enjoy!"
// "Don't forget your umbrella!"

// if weather is sunny, print - "Don't forget your sunglasses!"
// if weather is sunny and you don't want a tan, print "Don't forget your sunblocker", else print "enjoy!"
// if weather is snowy, print - "Don't forget your coat!"
// else print "Don't forget your umbrella!"

if (weather === 'sunny') { // MUST PUT CURLIES ;) 
    // start a block scope
    // true case
    console.log("Don't forget your sunglasses!");    // Don't forget your sunglasses!
    // Skipping unmet cases => omitting if not the case!   
    let noToTan = true;
    if (noToTan === true) {
        console.log("Don't forget your sunblocker!");   // Don't forget your sunblocker!
    } else {
        console.log("Enjoy!");
    }       
    // SyntaxError: Unexpected token '}' => }
    // Syntax debugging have a look at the curlies again! {}
} else if (weather === "snowy"){
    console.log("Don't forget your coat!")
} else {
    // the default case => Fallback 
    // false case 
    console.log("Don't forget your umbrella!");
}

