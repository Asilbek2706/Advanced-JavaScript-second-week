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

function Publication(title, year) {
    this.title = title;
    this.year = year;
}

Publication.prototype.getInfo = function(){
    console.log(`Nashr nomi: ${this.title} va Yili: ${this.year}`);
}

function Book(title, year, author) {
    Publication.call(this, title, year)
    this.author = author;
}

Book.prototype = Object.create(Publication.prototype);

Book.prototype.constructor = Book;

Book.prototype.getInfo = function() {
    console.log(`Kitob: ${this.title}, Muallif: ${this.author}, Yili: ${this.year}`);
};

const myBook = new Book("O'tkan Kunlar", 1926, "Abdulla Qodiriy");
myBook.getInfo();