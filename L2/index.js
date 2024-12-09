// in this practice session what we learn we  learn how can we user the Array,Object,Tuple,Enum in Typescript
// now we learn how can we apply the typescript in the object
// ------------------------ Object
// interface Person {
//     name:String
//     email:String
//     age:number
//     address:{
//         homeno:String
//     }
// }
// const persons:Person = {
//     name:"Prashant Fule",
//     mailto:email:"p@gmail.com",
//     age:23,
//     address:{
//         homeno:"D/27"
//     }
// }
// console.log(persons)
// ------------------------ Array
// 1.................... simple array
// interface Person {
//     name:String,
//     age:number,
//     skills:number[]
// }
// const person:Person = {
//     name:"Prashant Fule",
//     age:24,
//     skills:[1,2,3]
// }
// console.log(persons)
//2......................object in the Array   .. how can we give a netted object interface for that code is below 
// interface product {
//     id:number
//     product:String
// }
// interface Person  {
// name:String
// age:number
// skills:String[]
// products:product[]
// }
// const person: Person = {
//   name: "Fule Prashant",
//   age: 23,
//   skills: ["react", "node"],
//   products: [
//     { id: 1, product: "shirt" },
//     { id: 1, product: "pent" },
//     { id: 1, product: "t-shirts" },
//   ],
// };
// console.log(person)
// 3..................... how can we use extend word to the data for that code is below 
// interface interData {
//     name:String
//     age:number
// }
// interface data extends interData {
//     skills:String[]
// }
// const myDatas:data = {
//     name : "Prashant Fule",
//     age: 23,
//     skills:["react","node"]
// }
// console.log(myDatas)
// 4..................... how can we give a simple variable to that type
//  let allDatas: string[];  // Declare the array type
// allDatas = ["react", "node"];  // Initialize the array
// --> if you want to add all types of data in that than you have to use the any for that code is below 
// let theData : any[];
// theData = ["prashant","data",12,false]
// console.log(theData)
// ------------------------ tuple .. tuple is used for the only when you need only two lenght of the fixed array [0,1] --> only in this condition we used typescript
// interface Personal {
//     name:string,
//     age:number,
//     skills:string[],
//     products:[number,string] // this tuple is only for the fixed two size array data
// }
// const person:Personal = {
//     name:"Prashant Fule",
//     age:23,
//     skills:["react","node"],
//     products:[10,"hp 12"]
// }
// console.log(person)
// ------------------------ enum
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
var persons = {
    name: "Prashant",
    role: Role.User
};
console.log("".concat(persons.name, " is an ").concat(persons.role)); // "Prashant is an USER"
