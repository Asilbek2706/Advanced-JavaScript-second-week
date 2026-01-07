function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

const bmw = new Car("BMW", "red");
console.log(bmw);
console.log(bmw instanceof Car);

function Laptop(brand, ram, storage) {
    this.brand = brand;
    this.ram = ram;
    this.storage = storage;

    // this.getInfo = function() {
    //     return `${this.brand}: ${this.ram}GB RAM, ${this.storage}GB SSD`;
    // }
}

Laptop.prototype.showRam = function() {
    console.log(`${this.brand}: ${this.ram}GB RAM, ${this.storage}GB SSD`);
};

const macbook = new Laptop("Macbook", 16, 512);
const dell = new Laptop("Dell", 8, 256);

console.log(dell);
dell.showRam()
console.log(macbook);

function Phone(model, price, color) {
    this.model = model;
    this.price = price;
    this.color = color;
}

Phone.prototype.applyDiscount = function(amount) {
    this.price = this.price - amount
    console.log(`Discount: ${this.price}`);
}

Phone.prototype.showDetails = function() {
    console.log(`${this.model} is ${this.price} and ${this.color}`);
}

const samsung = new Phone("Samsung", 25.36, "black");
const iphone = new Phone("iphone", 18000, "orange");
console.log(samsung);
samsung.applyDiscount(200)
console.log(iphone);
iphone.showDetails()