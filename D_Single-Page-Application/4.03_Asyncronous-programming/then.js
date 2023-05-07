//We use the .then syntax to grab the data from a promise if the sending of the data was successful.
//We use the .catch syntax to grab the error if the promise has failed.

//Lets use a real world example where promises are used.

//Lets grab some data from an API (Application Programming Interface)

//We use the fetch command to fetch data from the API

//For example
fetch('https://fakerapi.it/api/v1/books') //fetch data from the URL given
.then(res => res.json())                  //We wait for a response. Once we receive the data we convert it.
.then(res => console.log(res))            //As the conversion also uses a promise we wait again.   
.catch(error => console.log(error))       //We use the .catch method to grab any error messages if any. 


//Lets dissect this code.

//The fetch sends a get request to the faker server(API) and requests a list of books
//This fetch returns a promise. We access the data from this promise with the .then keyword.
//We then take this data (if it is there ) and convert it to a javascript format using the json() method.
//We have to use another .then as the json() method also returns a promise.
//If all is okay and we have valid data, log it. If there are any errors our .catch keyword will catch it.

//We can see what we get back by inspecting the browser. If we then change the url. Instead of books we write bookss
//It should produce an error.

//The reason we need a browser here to see our results is because the fetch command only works in browsers.
//As it is attached to the window API.
//If we wanted to use fetch without a browser we could install 'axios' or 'node-fetch'