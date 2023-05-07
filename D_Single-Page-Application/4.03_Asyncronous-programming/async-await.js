//There is a new gunslinger in town...
//The syntax of .then is great, but there is a newer neater way.
//Async await was introduced back in August 2017.

//Lets see how it works.
//The first thing to remember is that async await can only be used inside a function.

//Lets fetch some data...

//We use a normal arrow function to create our function.
//Notice that to be able to use our async await functionality we need to use the keyword
//async within our function declaration.
//This tells javascript that our function will now run asynchronously.
//Also notice that whenever we use a function like this it is convention
//to encapsulate our fetch statements inside a try catch block.
const fetchData = async () => {
    try {
        const res = await fetch('https://fakerapi.it/api/v1/books')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


//Remember that because fetch is part of the window object it can only run inside a browser
//We can run this code to see the data. 
//lets also mess with the url to produce an error (rejected state)
fetchData()

//Personally I prefer the async await syntax as I think it's much neater. But it is personal preference.