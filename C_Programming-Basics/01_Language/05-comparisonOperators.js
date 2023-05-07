// Boolean Expressions: Comparison Operators
// <, <=, >, >=, ==, ===, !=, !==

console.log(1 < 2);  // true
console.log(2 <= 2); // true

console.log(1 > 2);     // false
console.log(3 >= 3);    // true

console.log("1" > 2);   // false. JS compiler removed the quotes and treated "1" as a number.

console.log(1 == "1");    // true. Loose comparison(==)
console.log(1 === "1");   // false. Strict Comparison(===)

console.log(1 != "1");    // false. Loose comparison(!=)
console.log(1 !== "1");   // true. Strict Comparison(!==)

// String Comparison
// unicode: internal encoding table JavaScript uses
console.log("Z" > "A"); // true
console.log("A" > "Z"); // false
console.log("Blue" > "Blur");   // false
console.log("a" > "A"); // true


// characters: abcj@%^
// unicode
// binary: 10101

