const person = {
    name: "Asilbek",
    introduce () {
        console.log(`My name is ${this.name}!`);
    }
}

console.log(person);
console.log(person.toString());

// Create prototypes
// 1.Constructor functions
const Car = function(brand, color) {

};

const User = function(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function() {
    console.log(`Hello, ${this.name}!`);
}

const asilbek = new User('Asilbek', 20);
console.log(asilbek);

//ES6 Classes
class Car1 {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}

class Car2 {
    constructor(brand) {
        this.brand = brand;
    }

    drive() {
        console.log(this.brand + " ketmoqda...");
    }
}

const bmw1 = new Car2("BMW");
bmw1.drive();

//Object.create()
const CarProto = {
    init(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}

const bmw = Object.create(CarProto);
bmw.init('bmw', 'black')
console.log(bmw);

const animal = {
    eats: true,
    walk() {
        console.log('Animal is walking...');
    }
}

const dog = Object.create(animal);
dog.bark  = function() {
    console.log('Wow-Wow');
}

console.log(dog.eats)
dog.walk()
dog.bark()

//setPrototypeOf
const robot = {
    charge: 100
}
const worker = {
    work: true
}

Object.setPrototypeOf(worker, robot);
console.log(worker.charge);