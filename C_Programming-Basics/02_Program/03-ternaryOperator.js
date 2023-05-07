// TERNARY OPERATOR
// The operator is represented by a question mark ?. It’s called “ternary”, because the operator has three operands. 
// It is actually the one and only operator in JavaScript which has that many.
// USE: Generally, we use a ternary operator when we want to set a value to a variable based on a condition.


// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

// const c = a + b;
// operator is +
// operands :  a and b, hence binary 

// Syntax: const result = condition ? value1 : value2

// operator is ?
// operands : condition, value1 and value2, hence ternary

// 1. 
// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
const age = 21;
const accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed);     // true

// ---------###--------
// 2.

const weather = "sunny";
console.log((weather === "sunny") ? "Don't forget your sunglasses!" : "Don't forget your umbrella!");

// ---------###--------
// 3. 

// if firstVar is less than secondVar, print secondVar, otherwise print "Blah".
// store the output in a varibale called ternaryOp

const firstVar = 10;

const secondVar = 20;

const ternaryOp = (firstVar < secondVar) ? console.log(secondVar) : "Blah";   // 20

// ---------###--------

// 4.

// Check if the name of the company is Netscape. 
// If true, print 'Netscape created JavaScript'
// If false, print 'No contributions known'.
// Store the output in a variable called 'contribution'

const company = 'Netscape';

const language = 'JavaScript';

const contribution = (company == 'Netscape') ? `${company} created ${language}.` : `No contributions known!`;

console.log(contribution);  // Netscape created JavaScript.

// ---------###--------
// 5.
const agE = 20;

const message = (agE < 13) ? `Hello kid!` :       // if
    (agE < 18) ? `Hello!` :                     // else if
    (agE > 18 && agE < 100) ? `Greetings!` :    // else if
    `What an unusual age!`;                     // else

console.log(message);   // Greetings!

// ---------###--------

// 6.
const varOne = 10;
const varTwo = 10;

// Check if varOne is greater than/equal to varTwo AND 120 is divisible by 2
// OR varOne multiplied by 260 is 2600, 
// then print "Heya!"
// and check if 12 is greater than 2, if true, print- 'The condition is true.', else print - 'The condition is false.'
// Create a local variable called varThree with a value 1.
// Check if varThree exists. If truthy, print - "varThree exists!".

if (((varOne >= varTwo) && (120 % 2 === 0)) || (varOne * 260 === 2600) ) {
    // local scope

    console.log("Heya!");       // Heya!

//  condition               if truthy                                  if falsy
    (12 > 2) ? console.log(`The condition is true.`) : console.log(`The condition is false.`);
    // The condition is true.

    const varThree = 1;

    if (varThree) {
        console.log("varThree exists!");        // varThree exists!
    }
} // no else block required!

// ---------###--------