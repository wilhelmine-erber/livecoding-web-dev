// We can pass arbitrary data to functions using parameters (also called function arguments) .
// Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.

// 1.
function square(number) {   // number is a parameter or argument
    console.log(number * number);
}

square(5);        // 25
square(50);       // 2500
square(2);        // 4
square(16);       // 256

// ---------##---------
// 2.

function showMessage(name, message) {
    console.log(`${name}: ${message}`);
}

showMessage('Anna', 'Hello!')       // Anna: Hello!
showMessage('Anna', 'Whats up!')    // Anna: Whats up!
showMessage('Fran', 'Hi!')          // Fran: Hi!
showMessage();                      // undefined: undefined

// ---------##---------
// 3.

// The default values of the parameters are undefined.
function concatnateStrings(string1, string2) {
    let output = `${string1} ${string2}`;
    console.log(output);
}

concatnateStrings('Hello');      // Hello undefined

// ---------##---------
// 4.

function showMessage4(text) {
    if (text === undefined) {
        text = "Empty message!";
    } 
    
    console.log(text);
}

showMessage4();                     // Empty message!
showMessage4("Hello world!");       // Hello world!

concatnateStrings("August", 26);    // August 26

showMessage4("August", 26);     // August
showMessage4(30, 26);           // 30
showMessage4(30, "August");     // 30

// ---------##---------
// 5.

function userInfo(firstName, lastName, email, dob) {
    const userObject = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        dob: dob
    }

    if (userObject.dob === undefined) {
        userObject.dob = "Date of birth not available!"
    }

    console.log(userObject);
}

userInfo('John', 'Doe', 'john.doe@gmail.com');  // dob not passed!

// {
//     first_name: 'John',
//     last_name: 'Doe',
//     email: 'john.doe@gmail.com',
//     dob: 'Date of birth not available!'
//   }