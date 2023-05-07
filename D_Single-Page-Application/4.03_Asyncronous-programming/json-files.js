//What is a json file.
//Where are they used and what do they look like.

//JSON is a format which is widely used as a way to transfer data from server to server and from server to browser.
//JSON is an acronym that stands for JavaScript Object Notation

//A JSON file or object is basically a stringified javascript object. Yes stringified is a real word.

//For example

//{"name": "fred", "email": "fred@fred.com"} //stringified object

//When we receive data from an external source such as an API the data will normally come in this JSON format.
//To be able to read and use this data we first have to convert it into a javascript readable object.

//We will see how we do this in the next lecture when using fetch.

//Lets create a normal object.

const obj1 = {name: 'fred', email: 'fred@fred.com'}

//Lets convert this object into a stringified version. 
//I would like to point out that this stringified object apart from what a JSON object looks like
//would be used inside javascript. For example if you wanted to store data inside the browsers localStorage,
//anything you store would have to be a string. For example if you wanted to store a number such as 5.
//You would first have to convert this number into a string such as '5'.
//The same applies to objects.
//Lets convert this javascript object into a stringified(JSON) object.


//Lets take a look at the original object
console.log(obj1)

const obj1Stringified = JSON.stringify(obj1)

//lets take a look at the difference
console.log(obj1Stringified)

//Now lets convert it back. In the coming lectures you will see how we use a different way to
//convert the data coming from an API. The principle is the same.

const obj1BackToNormal = JSON.parse(obj1Stringified)
console.log(obj1BackToNormal)

