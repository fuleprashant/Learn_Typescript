// in this Lecture we learnt what is the 1) unioun 2) 

// Union ----- Union types in TypeScript allow you to specify that a variable, function parameter, or return type can be one of multiple types. This is useful when a value can belong to more than one type, making your code flexible while maintaining type safety.

// You define a union type using the | (pipe) symbol.

// let variable: string | number;

// //.............. basic example of union

// const printId = (id: string | number) => {
// console.log(`the is is ${id}`)
// }

// console.log(printId(5))
// console.log(printId("five"))

// ....................Narrowing with Union Types

// const getLength = (input:string | number):number => {
//   if (typeof input === "string") {
//     return input.length;  
//   } else {
//     return input.toString().length;
//   }
// }
  
// console.log(getLength(5))
// console.log(getLength("five"))

// ....... how can we apply this in Object.................unioun is finish here

// interface Dog {
//     breed:string
//     bark:() => void
// }

// interface Cat {
//     breed:string
//     meow:() => void
// }

// type Pet = Dog | Cat;

// const makeSound = (pet:Pet):void => {
// if ("bark" in pet) {
//     pet.bark();
// }else{
//     pet.meow();
// }
// }

// const dog:Dog = {
// breed:"king",
// bark:() => console.log("Woof!!..")
// }

// const cat:Cat = {
//     breed:"Queen",
//     meow:() => console.log("meoww..")
// }

// makeSound(dog)
// makeSound(cat)

//-----------------------------------------------------------

// 2)) Literal types  =  in TypeScript allow developers to specify exact, fixed values a variable can take. This enables stricter control over the values that can be assigned to variables, improving code safety and predictability.

// function updateStatus(status: "success" | "error" | "loading") {
//     console.log(`Status is: ${status}`);
//   }
  
//   updateStatus("success"); // ✅ Valid
//   updateStatus("error");  // ❌ Error: Argument of type '"failed"' is not assignable to parameter type.
//   // updateStatus("update")     -- error comes beacause we initialize the string which isnot mention at upper side

// Combining Literal Types with Union Types
{
    /*
      
      type Role = "admin" | "user" | "guest";
  
  function accessControl(role: Role) {
    if (role === "admin") {
      console.log("Full access granted.");
    } else if (role === "user") {
      console.log("Limited access granted.");
    } else {
      console.log("Guest access granted.");
    }
  }
  
  accessControl("admin"); // ✅ Valid
  accessControl("guest"); // ✅ Valid
  accessControl("superuser"); // ❌ Error: Type '"superuser"' is not assignable to type 'Role'.
  
  
      */
  }
  
  // literal type with object is below
  
  {
    /*
       
  type Button = {
    label: string;
    color: "red" | "green" | "blue";
  };
  
  const saveButton: Button = {
    label: "Save",
    color: "green", // ✅ Valid
  };
  
  const cancelButton: Button = {
    label: "Cancel",
    color: "yellow", // ❌ Error: Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'.
  };
  
  
      */
  }
  
  // Literal Types with Type Guards
  
  {
    /*
      
      type Response = "success" | "failure";
  
  function handleResponse(response: Response) {
    if (response === "success") {
      console.log("Operation was successful!");
    } else {
      console.log("Operation failed.");
    }
  }
  
  handleResponse("success"); // ✅ Valid
  handleResponse("failure"); // ✅ Valid
  
  
      */
  }
  
  // practicle example of literal types is below
  {
    /*
      
      type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
      
      function fetchData(url: string, method: HTTPMethod) {
        console.log(`Fetching ${url} with ${method} method.`);
      }
      
      fetchData("/users", "GET"); // ✅ Valid
      fetchData("/users", "PATCH"); // ❌ Error: Type '"PATCH"' is not assignable to type 'HTTPMethod'.
      */
  }
  
  // 3)) Type Alias and custom types ... why we need this ? --->
  // What is a Type Alias?
  // A type alias gives a name to a type, making it easier to reference that type throughout your code. It is defined using the type keyword.
  
  // typealias for object
  {
    /*
      
      type User = {
    id: number;
    name: string;
    isAdmin: boolean;
  };
  
  const user: User = {
    id: 1,
    name: "Alice",
    isAdmin: true,
  };
  
  
      */
  }
  
  // typealias for array
  
  {
    /*
      type StringArray = string[];
       const fruits: StringArray = ["apple", "banana", "cherry"];
      */
  }
  
  // types for the function is below
  
  {
    /*
  type GreetFunction = (name: string) => string;
  const greet: GreetFunction = (name) => `Hello, ${name}!`;
  console.log(greet("Alice")); // Output: Hello, Alice!
       */
  }
  
  // Combining Type Aliases with Union Types
  {
    /*
  type Status = "pending" | "completed" | "failed";
  
  function updateStatus(status: Status) {
    console.log(`Status: ${status}`);
  }
  
  updateStatus("completed"); // Valid
  updateStatus("in-progress"); // Error: Type '"in-progress"' is not assignable to type 'Status'.
  
      */
  }
  
  // 2)). Custom Types
  // What are Custom Types?
  // Custom types in TypeScript are user-defined types created using type aliases or interfaces. They allow developers to model real-world entities or business logic in a type-safe way.
  
  // Custom types help encapsulate data structures, making code more expressive and maintainable.
  
  // Custom Types Using Type Aliases
  {
    /*
      type Address = {
    street: string;
    city: string;
    zip: string;
  };
  
  type Person = {
    name: string;
    age: number;
    address: Address;
  };
  
  const person: Person = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001",
    },
  };
      */
  }
  
  // custom type using interface
  
  {
    /*
      interface Car {
    make: string;
    model: string;
    year: number;
  }
  
  const myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
  };
  
      */
  }
  
  // how can we use extend in type alias for that codeis below
  
  {
    /*
      type BasicUser = {
    name: string;
  };
  
  type AdminUser = BasicUser & {
    role: "admin";
  };
  
  const admin: AdminUser = {
    name: "Alice",
    role: "admin",
  };
  
      */
  }
  // insertion types codeis below
  
  type Developer = {
    skills: string[],
  };
  
  type Manager = {
    teamSize: number,
  };
  
  type TechLead = Developer & Manager;
  
  const lead: TechLead = {
    skills: ["TypeScript", "React"],
    teamSize: 5,
  };
  

  
  