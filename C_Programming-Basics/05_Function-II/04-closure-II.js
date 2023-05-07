// https://javascript.info/closure

// const name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

function makeWorker() {
  const name = "Pete";

  return function () {
    console.log(name);
  };
}

const name = "John";

// create a function
const work = makeWorker();

// call it
work();

// --------------------------- //

// Lexical Environment

// In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the LEXICAL ENVIRONMENT.

// a “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.

// To summarize:
// A variable is a property of a special internal object, associated with the currently executing block/function/script.
// Working with variables is actually working with the properties of that object.

// --------------------------- //
// Function Declaration

// Unlike let variables, they are fully initialized not when the execution reaches them, but earlier, when a Lexical Environment is created.

// when a function runs, a new function Lexical Environment is created automatically.
// That Lexical Environment is used to store local variables and parameters of the call.


// When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.
