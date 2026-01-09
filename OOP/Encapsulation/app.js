/* Encapsulation */
// constructor functions
/** function Person(firstname, lastname, age) {
 this.firstname = firstname;
 this.lastname = lastname;
 let _age = age;

 this.getAge = function () {
 return _age + 2;
 }

 this.setAge = function (newage) {
 if (newage > 0) {
 _age = newage;
 }
 }
 }

 const person = new Person('Asilbek', 'Karomatov', 20);
 console.log(person.getAge());
 person.setAge(-10);
 console.log(person.getAge());
 console.log(person)
 */

// ES6 classes
/**class Person {
 #age;

 constructor(firstName, lastName, age) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.#age = age;
 }

 getAge() {
 return this.#age + 2;
 }

 setAge(newAge) {
 if (newAge > 0) {
 this.#age = newAge;
 }
 }
 }

 const person = new Person('Asilbek', 'Karomatov', 20);
 console.log(person.getAge());
 person.setAge(-10);
 console.log(person.getAge());
 console.log(person)*/
//===============================================================
class TelegramUser {
    #phoneNumber;
    #password;

    constructor(username, phoneNumber, password) {
        this.username = username;
        this.#phoneNumber = phoneNumber;
        this.#password = password;
    }

    getPhone() {
        const phone = this.#phoneNumber;
        const prefix = phone.slice(0, 4);
        const suffix = phone.slice(-2);
        return `${prefix}*****${suffix}`
    }

    setPassword(newPassword) {
        if (newPassword.length >= 8) {
            this.#password = newPassword;
            console.log("New password added successfully!")
        } else {
            console.log("Password is too short, it must be at least 8 characters.")
        }
    }
}
const user = new TelegramUser('asilbek_dev', '+998901234567', 'secret123');
console.log(user.getPhone());
user.setPassword("12345678")
console.log(user);
