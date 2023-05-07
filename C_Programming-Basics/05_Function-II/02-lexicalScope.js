// Lexical Scoping defines how variable names are resolved in nested functions: 
// inner functions contain the scope of parent functions even if the parent function has returned.
// static scope: lexical scope is also static scope because no matter from where the function is called, the lexical scope of the variable used in that function will alsways remain the same

// A colsure is always a nested function
// CLOSURE is a function which encloses a variable from it's parents' scope. This behaviour is also known as lexical scope.
// The closure is a collection of variables which were in scope at the time of ceation of the nested function.
// It is also called a MEMORY FUNCTION because it remembers the variables defined in its original scope(the local scope of the parent of the nested function).


// let myVar = "I am global";
// function outerFunction(){
//     console.log(myVar);
// }

// outerFunction()();       // I am global

let myVar = "I am global";
function outerFunction(){
    let myVar = "I am just a local scope!"
    let innerFunction = function() {
        return console.log(myVar);
    }
    return innerFunction;
}

outerFunction()();        // I am just a local scope!

// https://stackoverflow.com/questions/1047454/what-is-lexical-scope