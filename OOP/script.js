//Abstraction
class Car {
    startEngine() {
        this.#igniteCylinders();
        console.log("Motor o't oldi");
    }

    #igniteCylinders() {
        console.log("Silindrlarga o't berildi");
    }
}

const mercedes = new Car();
mercedes.startEngine();


//Encapsulation
class BankAccount  {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${amount} so'm qo'shildi`);
        }
    }

    getBalance() {
        return `$Sizning balansingiz: ${this.#balance} so'm`;
    }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance());

//Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} ovqat yemoqda.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Vov-vov!");
    }
}

const myDog = new Dog("Oktosh");
myDog.eat();
myDog.bark();

//Polymorphism
class Shape {
    draw() {
        console.log("Shakl chizilmoqda...");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Doira chizildi ◯");
    }
}

class Square extends Shape {
    draw() {
        console.log("Kvadrat chizildi □");
    }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(s => s.draw());