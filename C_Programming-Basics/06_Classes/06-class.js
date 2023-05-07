// the concept of class was introduced in ECMA2015. 
// Internally a class is a wrapper over prototype based inheritance(methods and properties).

// constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.
// class is a syntactical sugar over prototype based object oriented programming.
// It also gives you a better encapsulation of data and methods in the same code block since all the data and methods are defined in the same code block.

// class syntax is more comparable to similar features available in Java and C++ 

// The basic syntax is:

// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
// }

// Then use new MyClass() to create a new object with all the listed methods.

// The constructor() method is called automatically by new, so we can initialize the object there.

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

// Usage:
const user = new User("John");
user.sayHi();           // John

// When new User("John") is called:
// 1. A new object is created.
// 2. The constructor runs with the given argument and assigns this.name to it.
// Then we can call object methods, such as user.sayHi().

// -------##-------

// What class User {...} construct really does is:
// 1. Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// 2. Stores class methods, such as sayHi, in User.prototype.

// After new User object is created, when we call its method, it’s taken from the prototype. So the object has access to class methods.

// In JavaScript, a class is a kind of function.
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor);   // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi);                  // [Function: sayHi]

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'sayHi' ]

// -------##-------

// Class Expression

// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

const User2 = class {
    sayHi() {
        console.log("Hello");
    }
};

new User2().sayHi();        // Hello

// Similar to Named Function Expressions, class expressions may have a name.

// If a class expression has a name, it’s visible inside the class only:

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
const User3 = class MyClass {
    sayHi() {
        console.log(MyClass); // MyClass name is visible only inside the class
    }
};

new User3().sayHi();         // [Function: MyClass] // works, shows MyClass definition

// console.log(MyClass);     // error, MyClass name isn't visible outside of the class


// We can even make classes dynamically “on-demand”, like this:
function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}

// Create a new class
const User4 = makeClass("Hello");

new User4().sayHi(); // Hello

// -------##-------

console.clear();

class Vehicle {
    constructor(type, speed) {
        this.type = type
        this.speed = speed
    }

    move() {
        console.log(`vehicle.move: ${this.type},${this.speed}`)
    }

    stop() {
        console.log(`vehicle.stop: ${this.type},${this.speed}`)
    }

    // static: when I want to call derictly on the vehicle class
    static info() {
        return console.log("Vehicle is a base vehicle class");
    }
}

const rustyCar = new Vehicle("car", 10)
rustyCar.move()             // vehicle.move: car,10
console.log("=========")

rustyCar.stop()             // vehicle.stop car,10
console.log("=========")

Vehicle.info();             // Vehicle is a base vehicle class
// rustyCar.info(); will not work since info is a static method. It will only work on the class itself and not on the instances.
// rustyCar.info();            // TypeError: rustyCar.info is not a function

console.log("=========")

// Class inheritance is a way for one class to extend another class.
// So we can create new functionality on top of the existing.

// "super":

// Usually we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

// Classes provide "super" keyword for that.
// 1. super.method(...) to call a parent method.
// 2. super(...) to call a parent constructor (inside our constructor only).

class Car extends Vehicle {
    constructor(speed) {
        super("car", speed);
        this.jet = false;
    }
    // extends the stop method
    emergencyStop() {
        console.log(`car.emergencyStop ${this.type},${this.speed}`)
        this.jet = true;
        this.stop();
    }
}

const newCar = new Car(20)
newCar.move()
console.log("=========")
newCar.stop()
console.log("=========")
newCar.emergencyStop()
console.log("=========")


class SuperCar extends Car {
    constructor() {
        super(200); // since car constructor is acception only speed as a parameter.
        this.jet = false
    }

    // overrides the move method
    move() {
        console.log(`supercar.move ${this.type},${this.speed}`)
        this.jet = true
        super.move(); // to access parent class's move we cannot use 'this' since we have a method with the same name move
    }
}

let coolCar = new SuperCar()
coolCar.move()
console.log("=========")
coolCar.stop()
console.log("=========")
coolCar.emergencyStop()
