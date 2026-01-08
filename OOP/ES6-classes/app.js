// // ES6 classes
// class Car {
//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//     }
//
//     startEngine() {
//         console.log(`${this.brand} is starting engine`);
//     }
// }
//
// const myCar = new Car("BMW", "red");
// console.log(myCar);
// myCar.startEngine();

// // Getter and Setter
class Car {
    constructor(brand, color, topSpeed) {
        this.brand = brand;
        this.color = color;
        this._topSpeed = topSpeed;
    }

    get info() {
        return `${this.brand} with ${this.color}`;
    }

    get topSpeed() {
        return this._topSpeed;
    }

    set topSpeed(speed) {
        this._topSpeed = speed > 0 ? speed : 0;
    }
}

const bmw = new Car("BMW", "black", "350 km/s")
console.log(bmw.info);
bmw.topSpeed = -250;
console.log(bmw.topSpeed);

// // Static methods
class User {
    static allowedEmailDomains = ['gmail.com', 'mail.ru'];

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    static checkValidEmail(email) {
        const [, domain] = email.split('@');
        if (this.allowedEmailDomains.includes(domain)) {
            console.log('Email is allowed');
        } else {
            console.log('Email is not allowed');
        }
    }
}

User.checkValidEmail("asil@gmail.com")
User.checkValidEmail('asil@gmail.org')
