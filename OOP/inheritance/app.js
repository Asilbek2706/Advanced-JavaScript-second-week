/* Inheritance */
// 1. Constructor Functions
/** function Person(firstname, lastname, age) {
 this.firstname = firstname;
 this.lastname = lastname;
 this.age = age;
 }

 Person.prototype.introduce = function () {
 console.log(`Hello. My name is ${this.firstname} and I am ${this.age} years old`);
 }

 function Student(firstname, lastname, age, university) {
 Person.call(this, firstname, lastname, age)
 this.university = university;
 }

 Student.prototype = Object.create(Person.prototype);

 const student = new Student('Asilbek', 'Karomatov', 20, 'Acharya university');
 console.log(student);
 student.introduce();*/

// 2. ES6 classes
/** class Person {
 constructor(firstname, lastname, age) {
 this.firstname = firstname;
 this.lastname = lastname;
 this.age = age;
 }

 introduce() {
 console.log(`Hello. My name is ${this.firstname}, and my last name is ${this.lastname}`);
 }
 }

 class Student extends Person {
 constructor(firstname, lastname, age, university) {
 super(firstname, lastname, age);
 this.university = university;
 }

 getInfo() {
 console.log(`I am ${this.age} years old, and I am studying ${this.university}.`)
 }
 }

 const student = new Student('Asilbek', 'Karomatov', 20, 'Acharya university');
 console.log(student)
 student.introduce();
 student.getInfo();*/


//=============================================================================
/** function Animal(name, speed) {
 this.name = name;
 this.speed = speed;
 }

 Animal.prototype.run = function() {
 console.log(`${this.name} is running at 50km/h`);
 }

 function Bird(name, speed, wingSpan) {
 Animal.call(this, name, speed);
 this.wingSpan = wingSpan;
 }

 Bird.prototype = Object.create(Animal.prototype);

 Bird.prototype.fly = function() {
 console.log(`${this.name} is flying`);
 }

 const calibri = new Bird('Calibri', '50 km/h', 10) */

// ==============================================================================
/**class Vehicle {
 constructor(brand, year, color) {
 this.brand = brand;
 this.year = year;
 this.color = color;
 }

 displayInfo() {
 console.log(`Vehicle ${this.brand} is ${this.color}`);
 }
 }

 class ElectricCar extends Vehicle {
 constructor(brand, year, color, batteryLife) {
 super(brand, year, color);
 this.batteryLife = batteryLife;
 }

 displayInfo() {
 console.log(`Vehicle ${this.brand} is ${this.batteryLife} years`);
 }
 }

 const bmw = new ElectricCar('BMW', 2026, 'black', 100)*/
// ===========================================================================
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    work() {
        super.work();
        console.log(`...and managing the ${this.department} department.`)
    }
}

const manager = new Manager('Asilbek', 1000000, "JS");
manager.work();