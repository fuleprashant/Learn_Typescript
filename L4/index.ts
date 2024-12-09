// below is the way how can we write the basic function in the javascript . after give the string to that param afte that give a return value also after the () below is code for that
{
  /*
    const greets = (name:string):string => {
        return `the name of the user is ${name}`
    } 
    
    console.log(greets("prashant"))
*/
}

// below is the code that how can we use the optional parameters for that code is below

{
  /*
  const datas = (name: string, age?: number):string => {
    if (age) {
      return `Hello ${name} . You are ${age} old`;
    }
    return `hellow ${name}`
  };
  
  console.log(datas("sonu",23))
  console.log(datas("karishma"))
*/
}

// Default Parameters = for that code is below that how can we define the default paramas

{
  /*
     const greet = (name:string , age:number = 23) => {
        return `your name is ${name}. and you are ${age} old`
    }
    console.log(greet("sonu"))
    console.log(greet("prashant",24))
*/
}

// Function types --> function type syatax is below and below is the code for that

{
  /*
    type GreetFunction = (name:string) => string
    
    const greets: GreetFunction = (name) => {
        return `hello! ${name}`
    }
    
    console.log(greets("jay"))
*/
}

// rest parameters .. for that function is aside

{
  /*
    const sum = (...numbers:number[]):number => {
     return numbers.reduce((total,num) => total + num,0)
    }

    console.log(sum(1,2,3,4,5))
*/
}

// 7. Function Overloading
// Function overloading allows you to define multiple function signatures for a function, but only one implementation.

{
  /*
    function greet(person: string): string;
function greet(person: string, age: number): string;
function greet(person: string, age?: number): string {
  if (age) {
    return `Hello, ${person}. You are ${age} years old.`;
  }
  return `Hello, ${person}`;
}

console.log(greet("Alice"));           // Output: Hello, Alice
console.log(greet("Alice", 25));       // Output: Hello, Alice. You are 25 years old.
*/
}

// 8. Generics in Functions...................
// --> Generics allow you to create reusable functions that can work with any type, while still maintaining type safety.
{
  /*
    const data = <T>(value:T):T => {
     return value;
    }
    console.log(data(52))
    console.log(data("Prashant Fule"))
    */
}

// higher order function is below
// 1 . accept another function as an argument code is below
{
  /*

    const applyOpration = (a:number,b:number,opration:(x:number,y:number) => number): number =>  {
        return opration(a,b)
    }
    
    // add sum
    const sum = (x:number , y:number):number => x+y;
    console.log(applyOpration(2,3,sum))
    
    // substrack the sum
    const substrack = (x:number , y:number):number => x-y;
    console.log(applyOpration(3,2,substrack))
*/
}

// 2 . return nother function for that code is below


    
    function multiplys(a: number): (b: number) => number {
      return function (b: number): number {
        return a * b;
      };
    }
    
    const multiplyBys2 = multiply(2);
    console.log(multiplyBy2(5)); 
    
    const multiplyBys3 = multiply(3);
    console.log(multiplyBy3(5)); 




