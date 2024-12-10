// interface and classes
// OOPS (OBJECT ORIENTED PROGRAMMING STRUCURE)
// -->> Object-Oriented Programming (OOP) in JavaScript is a paradigm that allows you to structure your code using objects and classes, making it easier to organize, manage, and scale your applications. In OOP, the concept revolves around the following key principles:
// 1. classes and object
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism
// 5. Abstraction
// --> 1. classes and Object
// --> A class is a blueprint for creating objects. An object is an instance of a class. A class defines properties (attributes) and methods (functions) that the object will have.
//   Syntax to Define a Class:
// In JavaScript, we use the class keyword to define a class.
// class Animals {
//     name:string
//     species:string
//     constructor(name:string , species:string){
//         this.name = name
//         this.species = species
//     }
//     speak(){
//         console.log(`${this.name} is breed of ${this.species}`)
//     }
// }
// const dogs = new Animals("lebra","dog")
// console.log("dogs",dogs)
// dogs.speak();
var Animal = /** @class */ (function () {
    function Animal(fullName, lastName, age) {
        this.fullName = fullName;
        this.lastName = lastName;
        this.age = age;
    }
    Animal.prototype.getFullName = function () {
        return ("".concat(this.fullName, " ").concat(this.lastName));
    };
    Animal.prototype.getBirthday = function () {
        this.age += 1;
        console.log("Happy birthday ".concat(this.fullName, " you are ").concat(this.age, " old"));
    };
    return Animal;
}());
var person1 = new Animal("prashant", "Fule", 23);
console.log(person1.getFullName());
person1.getBirthday();
var person2 = new Animal("sonu", "Fule", 22);
console.log(person2.getFullName());
person2.getBirthday();
