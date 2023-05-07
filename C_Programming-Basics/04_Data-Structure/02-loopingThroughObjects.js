// The for/in statement loops through the properties of an object.
// The block of code inside the loop will be executed once for each property.

// Do not use the for/in statement to loop through arrays where index order is important.
// Use for…in to iterate over the properties of an object


const oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};

for (const key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel

// --------------------------------------------------------- //

const person = {
    fname:"John", 
    lname:"Doe", 
    age:25
}; 

let text = "";
let x;                            // A variable that iterates over the properties of an object
for (x in person) {
  text = `${text}${person[x]}`;   // text += person[x] + " ";
  console.log(person[x]);
  
}

console.log(text);

// ----------##----------

// You can also use for…in to iterate over the index values of an iterable like an string/array/object:

const str = 'Turn the page';

for (const index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1

// ----------##----------

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  }

const entries = Object.entries(fruits)
console.log(entries);                       
// [ [ 'apple', 28 ], [ 'orange', 17 ], [ 'pear', 54 ] ]

const keys = Object.keys(fruits)
for (const key of keys) {
  console.log(key)
}
// apple
// orange
// pear


for (const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}s`)
}

// There are 28 apples
// There are 17 oranges
// There are 54 pears


// --------------------------------------------------------- //

// Use for…of to iterate over the values in an iterable

const animals = ['🐔', '🐷', '🐑', '🐇'];
const names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (const animal of animals) {
  // Random name for our animal
  const nameIdx = Math.floor(Math.random() * names.length);

  console.log(`${names[nameIdx]} the ${animal}`);
}


// Melvin the 🐔
// Henry the 🐷
// Henry the 🐑
// Henry the 🐇
// adnaans-macbo