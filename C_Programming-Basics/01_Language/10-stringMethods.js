// STRING METHODS
// All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

// LENGTH
const myText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const findLength = myText.length;
console.log(findLength);    // 26

// ---------###--------

// POSITION

const myString = "Please locate where 'locate' occurs";
const findPosition = myString.indexOf("locate");
console.log(findPosition);  // 7

const findLastPosition = myString.lastIndexOf("locate");
console.log(findLastPosition);  // 21

// Both indexOf() and lastIndexOf() return -1 if the text is not found
const findMissingElement = myString.indexOf("sun");
console.log(findMissingElement);    // -1

// Both methods accept a second parameter as the starting position for the search
const findPositionStartingPoint = myString.indexOf("locate", 15);
console.log(findPositionStartingPoint); // 21

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
// it searches backwords(from the end to the beginning)
const findPositionFromEnd = myString.lastIndexOf("locate", 5);
console.log(findPositionFromEnd);   // -1

const myString2 = "widget with id";
const findPosition2 = myString2.indexOf("id");
console.log(findPosition2); // 1

const findLastPosition2 = myString2.lastIndexOf("id");
console.log(findLastPosition2); // 12

const findPositionWithSpace = myString2.indexOf(" id");
console.log(findPositionWithSpace); // 11

const findPositionWithSpace2 = myString2.indexOf("id ");
console.log(findPositionWithSpace2); // -1

// --------###--------
// INCLUDES

const ifSubStringIncluded = myString2.includes("id", 3);
console.log(ifSubStringIncluded);   // true

// --------###--------
// EXTRACTING STRING PARTS

// slice()
// It takes 2 parameters: the start position and the end position(end is not included)
const fruits = "Apple, Banana, Kiwi"; 
const slicedString = fruits.slice(7, 13);
console.log(slicedString);  // Banana: B is index 7, a is index 12

// If you omit the second parameter, the method will slice out the rest of the string.
const sliceWith1Param = fruits.slice(7);
console.log(sliceWith1Param);   // Banana, Kiwi

// If a parameter is negative, the position is counted from the end of the string.
const slicedStringInNegative = fruits.slice(-13, -7);
console.log(slicedStringInNegative);  // " Banan": index -13 will not be counted, -7 is counted

// counting from the end
const slicedStringFromEnd = fruits.slice(-7);
console.log(slicedStringFromEnd);   // "a, Kiwi": -7 is not counted

console.log(fruits.slice(-1));  // i: index -1 will not be counted -0 does not exist
console.log(fruits[0]); // A

// ---------####----------
// substr
// substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
const substrString = "Apple, Pineapple, Kiwi";
const getSubstrString = substrString.substr(7, 6);
console.log(getSubstrString); // Pineap

// If you omit the second parameter, substr() will slice out the rest of the string.
const getSubstrWithout2ndPara = substrString.substr(7);
console.log(getSubstrWithout2ndPara); // Pineapple, Kiwi

// If the first parameter is negative, the position counts from the end of the string.
const getSubstrNegativePara = substrString.substr(-7);
console.log(getSubstrNegativePara); // e, Kiwi

// -----------####-----------####-----------
// REPLACING THE STRING CONTENT
// replace()
// The replace() method replaces a specified value with another value in a string
const stringToReplace = "It's a lovely lovely outside!";
console.log(stringToReplace.replace("lovely", "cold")); // It's a cold lovely outside!
// The replace() method does not change the string it is called on. It returns a new string.

// By default, the replace() method replaces only the first match
// By default, the replace() method is case sensitive. Writing LOVELY (with upper-case) will not work.

const replacedString = stringToReplace.replace("lovely", "cold");
console.log(replacedString);    // It's a cold lovely outside!

console.log(stringToReplace);   // It's a lovely lovely outside!

// To replace case insensitive, use a regular expression with an /i flag (insensitive)
console.log(stringToReplace.replace(/LOVELY/i, "cold")); // It's a cold lovely outside

// -----------####-----------####-----------
// CONVERTING TO UPPER CASE & LOWER CASE

// to upper case
const text1 = "Hello World";
const text2 = text1.toUpperCase();
console.log(text2); // HELLO WORLD

// to lower case
const text3 = "HELLO WORLD";
const text4 = text3.toLowerCase();
console.log(text4); // hello world

// capitalise only the first letter
const name = 'earth';
const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
console.log("First uppercase letter", nameCapitalized);  // Earth

// -----------####-----------####-----------
// trim()
// The trim() method removes whitespace from both sides of a string
const stringToTrim = "    Hello Class FBW32!    ";
const trimmedString = stringToTrim.trim();
console.log(trimmedString);     // Hello Class FBW32!


// -----------####-----------####-----------
// EXTRACTING STRING CHARACTERS
// charAt()
// The charAt() method returns the character at a specified index (position) in a string
const charAtString = "Hello World";
const charAtResult = charAtString.charAt(6);
console.log(charAtResult); // W

// charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
const charCodeAtString = "Hello World";
const getCharCode = charCodeAtString.charCodeAt(0);
console.log(getCharCode);   // 72 

// -----------####-----------####-----------
// CONVERT A STRING TO AN ARRAY
// split()
// A string can be converted to an array with the split() method.
// Arrays are comma separated values. Arrays are mutable.
// This is an array: [1, 2, 3, "abcd", true, null, undefined]

const txt1 = "It is a beautiful day today!"
console.log(txt1.split("t"));   // [ 'I', ' is a beau', 'iful day ', 'oday!' ]

const txt2 = "1a1b1c1d1e1";
console.log(txt2);  // "1a1b1c1d1e1"

console.log(txt2.split("1"));   // [ '', 'a', 'b', 'c', 'd', 'e', '' ]

const txt3 = "abc def ghi";
console.log(txt3.split(" "));   // [ 'abc', 'def', 'ghi' ]

const txt4 = "abc-def-ghi";
console.log(txt4.split("-"));   // [ 'abc', 'def', 'ghi' ]

const txt5 = "a,b,c,d,e";
console.log(txt5);   // a,b,c,d,e

console.log(txt5.split(" "));    // [ 'a,b,c,d,e' ]: String inside an array

console.log(txt5.split(","));    //  [ 'a', 'b', 'c', 'd', 'e' ]

const txt6 = "Hello Class 'FBW32'";
console.log(txt6.split(""));    // ['H', 'e', 'l', 'l', 'o',' ', 'C', 'l', 'a', 's','s', ' ', 'F', 'B', 'W','3', '2']

console.log(txt6.split(","));   // [ "Hello Class 'FBW32'" ]