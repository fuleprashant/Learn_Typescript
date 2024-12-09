// in this lecture we learn about the below type keyword and that is 3

// 1)) unknown Type
//  --> The unknown type represents a value whose type is not known at the time of assignment. It's safer than any because it requires type-checking before performing operations.

{
  /*
    
    let value: unknown;

value = "Hello";
value = 42;
value = true;

// Type-checking required before performing operations
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe to use string methods
}

if (typeof value === "number") {
  console.log(value + 10); // Safe to perform number operations
}

    
    */
}

// 2)) never Type
// --> this function is use when there is nothing function is return
//3)) Any -- it use before and used by us before