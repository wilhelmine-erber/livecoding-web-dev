// TEMPLATE LITERALS

const myName = "mariam";

const city = 'Berlin';

const guestList = "Guests:\n - John\n - Peter\n - Den";
console.log(guestList);

console.log("My guest list is" + " " + guestList);


const quote = 'It\'s sunny today!';
console.log(quote); // It's sunny today!


// ES6 - 2015
const country = `Germany`;    // back-ticks

const multiLineString = `Guests:
- John
- Peter 
- Den`;

console.log(multiLineString);

// Expressions

console.log(`My guest list is ${multiLineString}`);

// My guest list is Guests:
// - John
// - Peter
// - Den

const user = "Dave";
console.log(`The user is ${user}`); // The user is Dave
// console.log(`The user is Ryan`);    // The user is Ryan

const price = 20;
const tax = 1.05;

const total = `The total price is ${price * tax}`;
console.log(total); // The total price is 21.