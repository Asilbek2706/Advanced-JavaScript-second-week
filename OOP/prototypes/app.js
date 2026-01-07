function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

Car.prototype.startEngine = function(){
    console.log(`${this.brand} is ${this.color}`);
}

const bmw = new Car("BMW", "red");
bmw.startEngine();

// __proto__
// console.log(bmw.__proto__)
console.log(Object.getPrototypeOf(bmw))

//Prototypical Inheritance
const mercedes = {
    brand: "Mercedes",
    color: "red",
    topSpeed: "330"
};

const usedMercedes = {
    __proto__: mercedes,
    new: false
};

console.log(usedMercedes.topSpeed);
console.log(mercedes.brand);