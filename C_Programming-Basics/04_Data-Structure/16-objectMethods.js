// A method is a function stored as a property.

// Object methods are used directly on the Object constructor, and use the object instance as a parameter. This is known as a static method.

const newObj = {
    hello: "World",
    123: 456,
    myFunction: function () {            // method
        console.log("Hello world!");
    }
};

console.log(newObj[123]);   // 456

newObj.myFunction();        // Hello world!

// ---------##---------

// Object // function called max.... => "METHOD" 
Math.max(1, 2, 3); // => REAL LIFE EXAMPLE
Math.min(1, 2, 3); // many math methods in one object at the same time! 

// ---------##---------

const objectLiteral = {
    property: "hello world",
    key: "Dumplings",
    method: function () {
        console.log("Good Morning " + this.key);
    }
};

objectLiteral.method(); // Good morning Dumplings!

// ---------##---------
const marcelsLibrary = {
    sayHello: function () {
        console.log('Hello Marcel');
    },
    sayGoodbye: function () {
        console.log('Goodbye Marcel');
    }
}
marcelsLibrary.sayHello();      // Hello Marcel
marcelsLibrary.sayGoodbye();    // Goodbye Marcel

// here we just see the definitions of the methods
console.log(marcelsLibrary);    // { sayHello: [Function: sayHello], sayGoodbye: [Function: sayGoodbye] }

// methods are inside, call it individually
console.log(Math);          // Object [Math] {}        

// ---------##---------

const personOne = {
    name: "John",
    dateOfBirth: 2000,
    age(dateOfBirth) {
        const today = new Date();
        const year = today.getFullYear();
        const age = year - dateOfBirth;
        return `${age}`;
    }
}

personOne.age(); // 19

// ---------##---------
// this

const user = {
    name: "John",
    age: 30,
    sayHi() {
        return this.name  // to access the object, a method can use 'this' keyword. 
    }
}

// The value of 'this' is the object BEFORE DOT, the one used to call the method sayHi.
// execution of user.sayHi(), the value of 'this' will be user:
console.log(user.sayHi());      // John

// ---------##---------

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName());     // John Doe

// ---------##---------

const user2 = {
    name: "John",
    age: 30,
    sayHi() {
        return this.name  // to access the object, a method can use 'this' keyword. 
    }
};

console.log(user2);     // { name: 'John', age: 30, sayHi: [Function: sayHi] }

const admin = user2;

user2 = null;   // the identifier user2 is now referring to null.

console.log(user2);     // null
console.log(admin);     // { name: 'John', age: 30, sayHi: [Function: sayHi] }

// the value of 'this' is evaluated during the run-time, depending on the context
console.log(admin.sayHi());   // John

console.log(admin);     // { name: 'John', age: 30, sayHi: [Function: sayHi] }

// -------------##------------

const user3 = {
    name: "John",
    age: 30,
};

const newRef = user3;

user3 = null;

console.log(user3);     // null
console.log(newRef);    // { name: 'John', age: 30 }

// newRef = null;

console.log(newRef);    // { name: 'John', age: 30 }

// garbage collectors come for rescue.

// ---------##---------

// Other Methods we already used
// console.log;
// Math.max;
// String.prototype.toLowerCase;
// String.prototype.includes;
// Number.prototype.toFixed;
// Boolean.prototype.valueOf;
// Array.prototype.join;
// Object.prototype.hasOwnProperty;

// ---------##---------

// Object.keys()
// Object.values()
// Object.entries()
// Object.assign()
// Object.freeze()
// Object.seal()
// Object.getPrototypeOf()
// Object.create()