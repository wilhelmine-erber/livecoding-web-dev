//What is a promise. Promises were introduced to the language back in 2012.
//A promise in javascript is pretty much the same as in real life.
//I promise to do something. I either fulfill the promise or I fail to do so.
//In a javascript promise we either resolve the promise or we reject the promise.
//A promise has three states. Initially when we create a promise it is pending.
//The promise in this state is either resolved or rejected.

//An example of a promise in real life would be.....
//lets say we order something from Amazon. Amazon promises to deliver that something on a certain date.
//While we wait we are in a pending state. If Amazon deliver our something on the date promised, then
//Amazon have resolved the promise and we get our something. Amazon mess up and don't deliver our something.
//Then the promise has been rejected.

//We can create a promise with the following code.

//A promise accepts two parameters (resolve and reject) and also a callback.
//Here we've used an arrow function as the callback
let promise =  new Promise((resolve, reject) => {})

//We could also use the more traditional function keyword.
//Personally I prefer the much neater syntax of an arrow function.
//let promise = new Promise(function(resolve, reject) {})

//Lets look at the promise as it stands now. 
console.log(promise)

//As you can see because we have not given it any parameters to resolve or reject it is in the pending state.

//Lets create another promise and give it something to do.
//In the below example we promise to send Fred's email. If correct then we will resolve the promise and send back Fred's email.
//If fred's email is not correct we will reject it.

let fredEmail = 'fred@fred.com'
let promise2 = new Promise((resolve, reject) => {
    
    if (fredEmail === 'fred@fred.com') {
        resolve(fredEmail)
    } else {
        reject('failed')
    }
})
//We use the .then syntax to retrieve whatever has been resolved.
//We use the .catch syntax to retrieve any errors. Or whatever has been rejected.
promise2.then(data => console.log(data) ).catch(errorMessage => console.log(errorMessage))

//Lets change fred's email and see what happens

//We can also resolve promises all at once. For example lets imagine we wanted to fetch data
//from multiple different API's. We want to act on that data once all the data has been received.

//For this example we wont reject anything.

let fred = new Promise((resolve, reject) => {
    resolve('fred@fred.com')
})

let sally = new Promise((resolve,reject) => {
    resolve('sally@sally.com')
})

let harry = new Promise((resolve, reject) => {
    resolve('harry@harry.com')
})

//We use the Promise.all. This will run all the promises above in parallel. Meaning all at the same time.
//Once they have all finished, then all the promises have been resolved and we get our data.
//Notice that all the promises we want to execute are place inside an array.
Promise.all([fred, sally, harry]).then(emails => {
    console.log(emails)
})

//You can use Promises in your own code. For example if you are loading in a large image from
//your own computer. 
//Generally speaking promises exist and are used when fetching data from an external source such
//as an API


