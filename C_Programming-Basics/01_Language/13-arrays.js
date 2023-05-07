// ARRAYS
// Arrays are ordered collection, where we have a 1st, a 2nd, a 3rd element and so on.
// They are comma separated values. 
// They are mutable.

// Declaration: 
// There are two syntaxes for creating an empty array:

const arr = new Array();
console.log(arr);       // []

const arr2 = [];
console.log(arr2);      // []

let fruits = [];
console.log(typeof fruits); // object

fruits = [
    "Apple", 
    "Orange", 
    "Banana", 
    "Melon", 
    "Lemon"
];
console.log(fruits);            // [ 'Apple', 'Orange', 'Banana', 'Melon', 'Lemon' ]
console.log(fruits[0]);         // Apple
console.log(fruits.length);     // 5

//-----------------####----------------

// We can replace an element:
console.log(fruits[0]); // Apple

fruits[0] = "Cherry";
console.log(fruits);    // [ 'Cherry', 'Orange', 'Banana', 'Melon' ]

// …Or add a new one to the array:
fruits[6] = "Grapes";
console.log(fruits);

// deleting values
// Since arrays are objects the elements are stored as values and indexes are keys. 
// delete obj.key removes a value by the key. 
delete fruits[fruits.length -1];
console.log(fruits); // [ 'Cherry', 'Orange', 'Banana', 'Melon', <3 empty items> ]

//-----------------####----------------

// mix of values
const mixtureOfData = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
console.log(mixtureOfData); // [ 'Apple', { name: 'John' }, true, [Function (anonymous)] ]

// get the object at index 1 and then show its name
console.log( mixtureOfData[1].name ); // John

// get the function at index 3 and run it
mixtureOfData[3](); // hello

//-----------------####----------------####------------------
// Array Methods
// methods that add and remove items from the beginning or the end: push(), pop(), shift(), unshift().

const fruits2 = [
    'Apple', 
    'Orange', 
    'Banana', 
    'Melon', 
    'Lemon'
];

console.log(fruits2);   // [ 'Apple', 'Orange', 'Banana', 'Melon', 'Lemon' ]

// pop() and push() work with the end of the array.
// pop(): extracts the last element of an array and returns it.

fruits2.pop();
console.log(fruits2);    // [ 'Apple', 'Orange', 'Banana', 'Melon' ]

fruits2.pop();
console.log(fruits2);    // [ 'Apple', 'Orange', 'Banana' ]

// ------##------
// push(): append the element to the end of the array.

fruits2.push("grapes");
console.log(fruits2);   // [ 'Apple', 'Orange', 'Banana', 'grapes' ]

// ------------##----------------
// shift(): extracts the first element of the array and returns it.
console.log('Original fruits array:', fruits2);   // [ 'Apple', 'Orange', 'Banana', 'grapes' ]

const shiftedItem = fruits2.shift();   
console.log('array after shift():', fruits2);     // [ 'Orange', 'Banana', 'grapes' ]
console.log('Shifted item stored as another variable-', shiftedItem);       // Apple


// ------##------
// unshift(): add element to the beginning of the array.

console.log('Original fruits array:', fruits2); // Original fruits array: ['Orange', 'Banana', 'grapes']

fruits2.unshift("Lemon", "kite");  
console.log(fruits2);    // [ 'Lemon', 'kite', 'Orange', 'Banana', 'grapes' ] 

// A QUEUE is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// Arrays support both operations.
// In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

// ------##------

// There’s another use case for arrays – the data structure named STACK.

// It supports two operations:
// push adds an element to the end.
// pop takes an element from the end.
// So new elements are added or taken always from the “end”.

// ------------##----------------
// Since arrays are objects the elements are stored as values and indexes are keys. 
// delete obj.key removes a value by the key.

// splice()
const greeting = ["Have", "a", "nice", "day!"];

greeting.splice(0, 1);  // from index 0 remove 1 element
console.log(greeting);  // [ 'a', 'nice', 'day!' ]

greeting.splice(0, 2);  // from index 0 remove 1 element
console.log(greeting);  // [ 'day!' ]

const greeting2 = ["Have", "a", "nice", "day!"]
// remove first 3 elements and replace them with another.
const removedElements = greeting2.splice(0, 3, "It's", "a", "beautiful");
console.log(greeting2);  // [ "It's", 'a', 'beautiful', 'day!' ]

// splice returns the array of removed elements:
console.log(removedElements);   // [ 'Have', 'a', 'nice' ]

// Now we can use push() to add items to array removedElements. 
removedElements.push("evening!");
console.log(removedElements);       // [ 'Have', 'a', 'nice', 'evening!' ]

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

const statement1 = ["We", "are", "learning", "the", "language", "JavaScript"];
statement1.splice(4, 0, "programming")
console.log(statement1);   // ['We', 'are', 'learning', 'the', 'programming', 'language', 'JavaScript']

// In array methods negative indexes are allowed. 
// They specify the position from the end of the array

const numbersArr = [1, 2, 5];
// from index -1 (one step from the end) delete 0 elements,then insert 3 and 4
numbersArr.splice(-1, 0, 3, 4); 

console.log( numbersArr ); // 1,2,3,4,5

// ------------##----------------

// slice()
const numbersArr2 = [0, 1, 2, 3, 4, 5, 6];
const slicedElements = numbersArr2.slice(0, 3);      // from 0, slice 3 elements
console.log('sliced elements:', slicedElements);      // sliced elements: [ 0, 1, 2 ]
console.log('original array:', numbersArr2);    // original array: [0, 1, 2, 3,4, 5, 6]

// ------------##----------------
// concat()
// concat() creates a new array that includes values from other arrays and additional items.
// It accepts any number of arguments – either arrays or values.

const numbersArr3 = [1, 2];
const concatNumbers = numbersArr3.concat([3, 4]); 
console.log(concatNumbers);     // [ 1, 2, 3, 4 ]
console.log(numbersArr3);       // [ 1, 2 ]

let concat2Arrays = numbersArr3.concat([3, 4], [5, 6]); 
console.log(concat2Arrays);     // [ 1, 2, 3, 4, 5, 6 ]

const concatStringsToArrays = numbersArr3.concat([3, 4], "hello", "holla");
console.log(concatStringsToArrays);     // [ 1, 2, 3, 4, 'hello', 'holla' ]

// arrays are mutable
concat2Arrays = concat2Arrays.concat([7, 8]);
console.log(concat2Arrays);     // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const testArray1 = ["hello"];
const testArray2 = ["world"];

const concatTwoArrays = testArray1.concat(testArray2);
console.log(concatTwoArrays);   // [ 'hello', 'world' ]

// ------------##----------------
// reverse()
// The method reverse reverses the order of elements in arr.
const aNewArray = [1, 2, 3, 4, 5];
aNewArray.reverse();
console.log(aNewArray);     // [ 5, 4, 3, 2, 1 ]

// indexOf()
const anotherArray = ["hello", "world"]
console.log(anotherArray.indexOf("hello"));         // 0
console.log(anotherArray.indexOf("hello", 1));      // -1: look from hello from index 1

// includes()
console.log(anotherArray.includes("hello"));        // true
console.log(anotherArray.includes("hello", 1));     // false


// // join turns an array into a string
const newVariable = anotherArray.join("-");
console.log(newVariable);            // hello-world
console.log(typeof newVariable);     // string

// ---------###--------
// sort()

const newNumArray2 = [1, 2, 15];
newNumArray2.sort();
console.log(newNumArray2);      // [ 1, 15, 2 ]

const newNumArray3 = [1, 2, 15, -4362346, 'string', 'abc'];
newNumArray3.sort();
console.log(newNumArray3);      // [ -4362346, 1, 15, 2, 'abc', 'string' ]
console.log(typeof newNumArray3);   // object

// ----------------####----------------

const fruits3 = [
    'Apple', 
    'Orange', 
    'Banana', 
    'Melon', 
    'Lemon'
];
console.log(fruits3);   // [ 'Apple', 'Orange', 'Banana', 'Melon', 'Lemon' ]

// toString()
const arrayToString = fruits3.toString();
console.log(arrayToString);         // Apple,Orange,Banana,Melon,Lemon

console.log(typeof arrayToString);  // string
console.log(arrayToString[3]);      // l