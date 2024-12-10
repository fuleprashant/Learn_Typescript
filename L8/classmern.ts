class Department {
  name: string;
  private employes: string[];
  constructor(n: string) {
    this.name = n;
    this.employes = [];
  }
  describe() {
    console.log("Department", this.name);
  }
  addEmploye(emp: string) {
    this.employes.push(emp);
  }

  printInformation() {
    console.log(this.employes.length);
    console.log(this.employes);
  }
}

const accounting = new Department("account");
// accounting.describe();
accounting.addEmploye("jay");
accounting.addEmploye("sonu");
// accounting.employes = ["xyz"];
accounting.printInformation();

// now we learn that why we need to make variables private b'coz you see that we can change whole array by add below line  accounting.employes = ["xyz"]; to avoid this mistake we have to add private on variable name as ahead employe

// what is protected access modifiers =1. protected properties can be accessed within the class and subclasses.
//                                     2. They cannot be accessed outside the class or subclass instance directly.

{
  /*
    
    class Animal {
      protected name: string; // protected property which is accesable only in the class and subclass
    
      constructor(name: string) {
        this.name = name;
      }
    
      protected displayInfo(): void {
        console.log(`Animal is ${this.name}`);
      }
    }
    
    class Dog extends Animal {
      breed: string;
    
      constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
      }
    
      public showDetails(): void {
        console.log(`the dog name is ${this.name}`); // access protected variable
        this.displayInfo(); // access protected methos
      }
    }
    
    const myDog = new Dog("Buddy", "Golder retrivers");
    myDog.showDetails();
    */
}

// overriding properties

{
  /*
    class vehicle {
      protected type: string = "Generic Vehicle";
    
      public describe(): void {
        console.log(`This is a ${this.type}`);
      }
    }
    
    class Car extends vehicle {
      protected type: string = "Car"; // overriding the type property
    
      public describe(): void {
        console.log(`This is a ${this.type}`);
      }
    }
    
    const myVehicle = new vehicle();
    myVehicle.describe();
    
    const myCar = new Car();
    myCar.describe();
    
    */
}


