// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// To create a function we can use a function declaration.
// Syntax:
// function name() {
//     body of the function
// }


// 1.
function printMessage() {
    console.log("This is a function!");
};

// call function printMessage.
printMessage(); // This is a function!

// purpose of functions: avoid duplication
printMessage();


// ---------##---------
// 2.
// The function has full access to the outer variable. It can modify it as well.

let userName = "John";

function showMessage2() {
    userName = "Bob";
    const message = `Hello ${userName}`;
    console.log(message);
}

showMessage2();     // Hello Bob

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. 
console.log(userName);  // Bob
// console.log(message);   // ReferenceError: message is not defined

// ---------##---------
// Global Scope
// The outer variable is only used if there's no local scope.
// If a same-named variable is declared inside the function, then it shows the outer one.
// Global variables are visible from any function.

// 3.
// A variable declared inside a function is only visible inside that function.

const userName2 = "Jane";   // read-only variables

function printHello() {
    const userName2 = "Doe";      // 
    const message = `Hello ${userName2}`;
    console.log(message); 
}
// const userName2 = "Doe"; // SyntaxError: Identifier 'userName2' has already been declared
printHello()                // Hello Doe
console.log(userName2);     // Jane

// ---------##---------
// A word on naming functions:
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

// For instance, functions that start with "show" usually show something.

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.