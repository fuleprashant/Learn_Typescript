"use strict";
// JavaScript is an object-oriented programming (OOP) language that allows us to implement fundamental OOP concepts such as Encapsulation, Abstraction, Inheritance, Polymorphism, and Composition. Below is a detailed explanation with code examples for each OOP concept in JavaScript.
// 1. Encapsulation
// --> Encapsulaion is the concrept of building data and methods that oprate the data into the singleuni or in a single class . it also refers to restricting direct access to some of an object component , which can be done by the private variables
{
  /*
      class Car {
        brand: string;
        model: string;
        private _year: number;
        constructor(brand, model, year) {
          this.brand = brand; // public
          this.model = model; // public
          this._year = year; // private
        }
      
        // public method
        displayInfo(): void {
          console.log(`Car ${this.brand} ${this.model}, Year: ${this.year}`);
        }
      
        // private method
        private _privateMethod(): void {
          console.log("This is the private variable");
        }
      
        // below is public method to get the provate method easily
        public callPrivateMethod(): void {
          this._privateMethod();
        }
      
        // getter and setter for the private variable to access
      
        // getter for private "._year" property
        get year(): number {
          return this._year;
        }
      
        // Setter for private '_year' property with validation
      
        set year(value: number) {
          if (value > 0) {
            this._year = value;
          } else {
            console.log("Invalid year");
          }
        }
      }
      let cardata = new Car("Tesle", "Model 5", 2021);
      cardata.displayInfo();
      // cardata._privateMethod();
      
      // cardata._privateMethod();
      
      // access the privte variable threw the getter setter
      console.log(cardata.year);
      cardata.year = 2024;
      console.log(cardata.year);
      cardata.callPrivateMethod();
      */
}
// get the private variables threw the getter setter --- get the private function to make the public function and return public function
// 2. Abstraction
// --> Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object. This allows the user to interact with an object without knowing its internal workings.
// -->
{
  /*
      class BankAccounts {
        accountNumber: number;
        balance: number;
      
        constructor(accountNumber, balance) {
          this.accountNumber = accountNumber;
          this.balance = balance;
        }
      
        getBalance() {
          console.log(`Your balance is ${this.balance}`);
        }
      
        deposite(amount: number) {
          if (amount) {
            this.balance += amount;
            console.log(
              `Deposite amount is ${amount}.New balance is ${this.balance}`
            );
          }
        }
      
        withdraw(amount: number) {
          if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
          }
        }
      }
      const myAccounts = new BankAccounts(123456789, 1000);
      // console.log(myAccount);
      
      myAccounts.getBalance();
      myAccounts.deposite(500);
      myAccounts.withdraw(100);
  */
}
// 3)).. Inheritance
// --> Inheritance allows a new class (child class) to inherit properties and methods from an existing class (parent class). It promotes code reuse and creates a hierarchical class structure.
{
  /*
      class Animals {
        name: string;
        species: string;
      
        constructor(name: string, species: string) {
          this.name = name;
          this.species = species;
        }
      
        // methhod with return type annotation
        speak(): void {
          console.log(`${this.name} makes a sound`);
        }
      }
      
      class dogs extends Animals {
        breed: string;
      
        constructor(name: string, breed: string) {
          super(name, "Dog");
          this.breed = breed;
        }
      
        // Override the speak method with return type annotation
        speak(): void {
          console.log(`${this.name} barks`);
        }
      
        fetch(): void {
          console.log(`${this.name} is fetching the ball`);
        }
      }
      
      const dog = new dogs("Buddy", "Golder retriver");
       */
}
// 4. Polymorphism
// --> Polymorphism means the ability of a function, object, or method to take on multiple forms. In JavaScript, this can be achieved via method overriding or method overloading
{
  /*
  
      class shape {
        draw(): void {
          console.log("Drawing a shape");
        }
      }
      
      class circle extends shape {
        draw(): void {
          console.log("Drawing a circle");
        }
      }
      
      class Square extends shape {
        draw() {
          console.log("Drawing a square");
        }
      }
      
      const sha = new shape();
      sha.draw();
      const cir = new circle();
      cir.draw();
      const squ = new Square();
      squ.draw();
       */
}
//  explaination about the polymorphisam
// --> Polymorphism allows objects of different classes (e.g., Circle, Square) to use the same method (draw) but with different implementations.
// --> This is also known as method overriding, where child classes provide their own implementation of a method defined in the parent class.

