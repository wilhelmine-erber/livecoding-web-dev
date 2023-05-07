//What is synchronous code and why we need asynchronous code.
//Synchronous code runs line by line. Each consecutive line has to wait until the previous line has finished 
//executing. This is called blocking. If we had a program with 5 lines of code,
//line 5 could not execute until line 1,2,3,4 had finished executing. Therefore line 5 is blocked until the rest
//have finished.

//An analogy I like to use is the relay race.
//In a relay race we have a team of five runners. Runner one starts the race. Runner two cannot start racing
//until runner one hands runner two the baton. So on and so on until runner five completes the race.
//This would be an example of synchronous code.
//Take the same example but this time runner two does not wait for runner one. He decides to run his own race.
//Also runner three will not wait for him, but instead waits for runner one.

//For example lets demonstrate with the following code.
//Synchronous code
const fred = 'fred'
console.log(`Hi I'm ${fred}`)
const sally = 'sally'
console.log(`Hi I'm ${sally}`)

const harry = 'harry'
console.log(`Hi I'm ${harry}`)

//With Asynchronous code the blocking code is taken out of the normal execution flow and run in parallel.

console.log('I am running synchronously') //This runs first

//The setTimeout command runs asynchronously
//This line will run outside the normal code execution and will not block the next line
//Here we only console log when this code has completed. Simulating a call to an external server
setTimeout(() => console.log('I am running asynchronously'), 5000) 

//This code does not wait for the above code but will run directly after the first line of code.
console.log('I am also running synchronously')

//The reason we need asynchronous code is so that our program is not blocked when asking for data
//from another server for example. Lets say we wanted to grab some external data from an API. We do
//not know how long this would take. It could take a second, it could take 30 seconds. If we tried to code
//this synchronously the program would halt until the data arrived.


    

