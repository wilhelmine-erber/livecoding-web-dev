"use strict";
// SCOPE ?
// Place where our variables "live", where we can access it, are available

// BLOCK SCOPE = in between {} we have a new blockscope for our defined vars inside! 
// we inherit always all surroundings! 
// prefer if possible 

// GLOBAL SCOPE = will ALWAYS be available everywhere
// so try to avoid it, but if you need it, use it!

// What is that again?
const globalScope = "hello global scope"; // global var
// here is the global scope

if (true) { // true case
    const blockScopeTrue = "hello block scope true"; // locally in this block only!
    // only inside the if available
    console.log(blockScopeTrue);
    console.log(globalScope);
    // always accessible everywhere 

    if (true) {
        console.log(blockScopeTrue);
        console.log(globalScope);
    }

} else { // false case
    const blockScopeFalse = "hello block scope false"; // locally in this block only!
    // only inside the if available
    console.log(blockScopeFalse);
    console.log(globalScope);
}
console.log(globalScope);
//console.log(blockScopeTrue);// ReferenceError: blockScopeTrue is not defined

// A word on indentation and readability 
// my advice => keep it 4 spaces indetated always => 1 TAB 
// helps with debugging and so on...

// Difference between var and const 
// The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
{
    var hello = "world";
    // to avoid if possible for all means
    // THERE IS NO CHECK FOR EXISTING VARS! 
    var hello = "bla";
}
console.log(hello); // Scope is ALWAYS globally // leaking out

const globally = "i need this everywhere"; // globally available; checks for existence
{
    //The const statement declares a block-scoped local variable, optionally initializing it to a value.
    const hello2 = "world";
    //const hello2 = "bla"; // SyntaxError: Identifier 'hello2' has already been declared
}
//console.log(hello2); // not available outside

const GLOBALLY = "need this to be everywhere"; {
    // Constants are block-scoped, much like variables defined using the const keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.
    const MY_NAME = "Martina";
    //MY_NAME = "Freundorfer"; TypeError: Assignment to constant variable.
    console.log(GLOBALLY);
}
console.log(GLOBALLY);
// console.log(MY_NAME); // not available outside

// When should I use if, when should I use ternary operator? 
const date = "Wednesday";
if (date === "Wednesday") {
    console.log("its the mid week");
} else {
    console.log("it's not the mid week");
}
console.log((date === "Wednesday" || date === "Sunday") ? "its the mid week" : "its not the midweek");
// only one ...

// Math problems 
const number = 42;
// is it possible to divide by 2?
// => then please divide by 2, divide by 2 again, post both on the console.

if (42 % 2 !== 0) {
    console.log("not possible to divide by two");
} else {
    console.log(42 / 2); // statement number one
    console.log(42 / 2 / 2); // statement number two 
}
// 42 % 2 === 0 ? console.log(42/2); console.log(42/2/2); : not possible to turn into a ternary
// if we have more than one statement 
// count the semicolons 
// in any of the true or false cases! 