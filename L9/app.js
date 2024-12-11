"use strict";
// here in this code we learn how can we apply the type gaurd and why we use type gaurd
{
    /*
      
      // type combinable = string | number;
      // type Numeric = number | boolean;
      
      // type Universal = combinable & Numeric;
      
      // function add(a: combinable, b: combinable) {
      //   return a + b;
      // }
  */
}
// b'coz we get upper problem for that solution is below
// 1
{
    /*
      
      
      type combinable = string | number;
      type Numericle = string | boolean;
      
      type Universal = combinable & Numericle;
      
      function add(a: combinable, b: combinable) {
        // to solve the upper problem we add this code
        if (typeof a === "string" || typeof b === "string") {
          return a.toString() + b.toString();
        }
        return a + b;
      }
      
      console.log(add(2, 3));
      console.log(add("2", 10));
  */
}
// 2)) new topic = type casting and type assetion
{
    /*
  
      
  */
}
