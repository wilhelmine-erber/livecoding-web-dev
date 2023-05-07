// A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
// Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

const user = {        // an object
    name: "John",   // by key "name" store value "John"
    age: 30,        // by key "age" store value 30
};

// The last property in the list may end with a comma. That is called a "TRAILING" or “HANGING” comma. Makes it easier to add/remove/move around properties, 
// because all lines become alike.

// dot notation
user.isAdmin = true;
console.log(user);  // { name: 'John', age: 30, isAdmin: true }

// objects are mutable
delete user.age;
console.log(user);  // { name: 'John', isAdmin: true }


const user2 = {
    name: "John",
    age: 30,
    "likes birds": true  // multi word property name must be quoted
};

// bracket notation
// For multiword properties, the dot access doesn’t work: user.likes birds = true

const user3 = {};

// set
user3["likes birds"] = true;

// get
console.log(user3);  // { 'likes birds': true }

// delete
delete user3["likes birds"];

console.log(user3); // {}

// ----------------//---------------- //
// We can use square brackets in an object literal. That’s called COMPUTED PROPERTIES.

const fruit = "kiwi";

const fruitBucket = {
    [fruit] : 5,
}

console.log(fruitBucket); // { kiwi: 5 }

// OR

const fruits = 'apple';
const bag = {
  [fruits + 'Computers']: 5 // bag.appleComputers = 5
};

// ---------##---------
// Reserved words are allowed as property names

const obj = {
    for: 1,
    const: 2,
    return: 3
  };
  
  console.log(obj.for + obj.const + obj.return); // 6

// ---------##---------
// Comparing Objects:

const personA = {       // nested object
  name: {
      first_name: "John",
      last_name: "Doe"
  },
  age: 32,
  address: {
      strNum: 55,
      strName: "Abc",
      pinCode: 12334,
      country: "Germany"
  },
  companiesWorkedWith: {
      name: "dci",
      duration: "2years",
      year: 2023,
  }
};

console.log(personA.address.country);                // Germany
console.log(personA.companiesWorkedWith.year);       // 2013

const personB = {       // nested object
  name: {
      first_name: "John",
      last_name: "Doe"
  },
  age: 32,
  address: {
      strNum: 55,
      strName: "Abc",
      pinCode: 12334,
      country: "Germany"
  },
  companiesWorkedWith: {
      name: "dci",
      duration: "2years",
      year: 2023,
  }
};

// Find a function in lodash that will return true when comparing the two objects
console.log(personA === personB);   // false

console.log(personA.age === personB.age);    // true

// ---------##---------
// In real code we often use existing variables as values for property names.

// Property value shorthand
// properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
// Instead of name:name we can just write name, like this:

function createUser(name, age) {
  return {        // Property value shorthand
      name,       // same as name: name
      age         // same as age: age
  };
}

const user4 = createUser("John", 30);     // calling function createUser and passing arguments

console.log(user4);     // { name: 'John', age: 30 }
console.log(user4.name);    // John

const user5 = createUser("Ketty", 66);    // calling function createUser and passing different arguments
console.log(user5);         // { name: 'Ketty', age: 66 }

// ---------##---------
// Property existence test, “in” operator
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!
// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

const useR2 = { name: "John", age: 30 };

console.log(useR2.noSuchProperty === undefined);    // true

// There’s also a special operator "in" for that.
// The syntax is:   "key" in object

console.log("age" in useR2);
console.log("blabla" in user);

// ---------##---------

// Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

const personC = {       // nested object
  name: {
      first_name: "John",
      last_name: "Doe"
  },
  age: 32,
  address: {
      strNum: 55,
      strName: "Abc",
      pinCode: 12334,
      country: "Germany"
  },
  companiesWorkedWith: {
      name: "dci",
      duration: "2years",
      year: 2023,
  }
};

console.log(Object.keys(personC));  // [ 'name', 'age', 'address', 'companiesWorkedWith' ]

// accessing the keys of the nested object called address:
console.log(Object.keys(personC.address));  // [ 'strNum', 'strName', 'pinCode', 'country' ]


// ---------##---------
// Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values

console.log(Object.values(personC));

// [
//     { first_name: 'John', last_name: 'Doe' },
//     32,
//     { strNum: 55, strName: 'Abc', pinCode: 12334, country: 'Germany' },
//     { name: 'dci', duration: '2years', year: 2023, }
// ]

// accessing the values of the nested object called address:
console.log(Object.values(personC.address));    // [ 55, 'Abc', 12334, 'Germany' ]

// ---------##---------
// Object.entries creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.

const entries = Object.entries(fruits)
console.log(entries)
// [
//   [apple, 28],
//   [orange, 17],
//   [pear, 54]
// ]

// If you use Object.entries you might want to destructure the array into its key and property.

for (const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}s`)
}
  
  // Result
  // There are 28 apples
  // There are 17 oranges
  // There are 54 pears


// ---------##---------
// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (const key in user) {
//     // keys
//     alert( key );  // name, age, isAdmin
//     // values for the keys
//     alert( user[key] ); // John, 30, true
//   }