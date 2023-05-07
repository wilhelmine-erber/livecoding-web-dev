// A callback function is a function passed into another function as an argument, 
//  which is then invoked inside the outer function to complete some kind of routine or action.

// A function that accepts other functions as arguments is called a higher-order function, 
// which contains the logic for when the callback function gets executed. 

// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.

// ---------------------------------------------- //
// WHY WE NEED CALLBACK FUNCTIONS

function first() {
    console.log(1);
}
function second() {
    console.log(2);
}
first();    //1
second();   //2

// BUT // --------------------- //

function firstFunc() {
    // Simulate a code delay
    setTimeout(function () {
        console.log(1);
    }, 500);
}
function secondFunc() {
    console.log(2);
}
firstFunc();    //2
secondFunc();   //1     Even though we invoked the first() function first, we logged out the result of that function after the second() function.

// It’s not that JavaScript didn’t execute our functions in the order we wanted it to, 
// it’s instead that JavaScript didn’t wait for a response from first() before moving on to execute second().

// you can’t just call one function after another and hope they execute in the right order. 
// Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

function caller(func) {
    console.log("I accept a function and then call it")
    func();
}

function callback() {
    console.log("I am a callback function")
}

caller(callback);

// I accept a function and then call it
// I am a callback function

// ----------------------------

function funcToBeCalled(name) {
    console.log("I was called by", name);

}

function funcWithCallback(callback) {
    console.log("I am funcWithCallback")
    callback("funcWithCallback");           // string "funcWithCallback" which the funcToBeCalled function accepts as an argument; 
}

// 1.
funcWithCallback(funcToBeCalled);

// 2.
setTimeout(funcToBeCalled, 1000);

// 3. 
setTimeout(function () {
    console.log("I am setTimeout")
    funcToBeCalled("setTimeout")
}, 2000)

// 4.
function wrapSettimeoout(callback) {
    console.log("I am wrapSettimeoout")
    setTimeout(() => {
        console.log("I am setTimeout")
        callback("wrapSettimeoout")
    }, 2000);
}

wrapSettimeoout(funcToBeCalled);



// ---------------------------------------------- //
// function doHomework(subject) {
//     console.log(`Starting my ${subject} homework.`);
// }

// doHomework('math');

// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
// }
// function alertFinished(){
//     console.log('Finished my homework');
// }
// doHomework('math', alertFinished);