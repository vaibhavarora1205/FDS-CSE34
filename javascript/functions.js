// function display(a,b)
// {
//     return a+b;
// }
// console.log(display())

// const { StrictMode } = require("react")

// console.log(display(10,'ab'))
// console.log(display(10,null))

// function display(message){
//     console.log("Hello", message)
//     console.log("Hello", {message})
//     console.log(`Hello, ${message}`)
// }

// function loggesinUser(user){
//     if(user==null)
//     {
//         return "Unauthorized login fail";
//     }
//     return "User Just Logged in !";
// }

// function loggesinUser(user){
//     if(!user)
//     {
//         return "Unauthorized login fail";
//     }
//     return "User Just Logged in !";
// }

// function display(obj)
// {
//     console.log(`${obj.name} and ${obj.age}`);
// }
// display({
//     name:"Vaibhav",
//     age:19
// })

// // --------------------------to date
// const dateFormat = {
//     date: new Date(),
//     display(format = "american") {
//         if (format === "indian") {
//             return this.date.toLocaleDateString("en-IN");
//         } else {
//             return this.date.toLocaleDateString("en-US");
//         }
//     }
// };
// console.log(dateFormat.display());
// console.log(dateFormat.display("indian"));

// function display(a,b)
// {
//     if(!a && !b)
//     {

//         return "Give Both Arguments"
//     }
//     return a+b;
// }
// display(10,20);

// function requiredarg(){
//     throw new error("Arguments are required")
// }
// function display(a=requiredarg(),b=requiredarg())
// {
//     return a+b;
// }
// try{
// console.log(display(10,20));
// console.log(display());
// }catch(err){
//     console.log(err)
// }

// // ----------------------function hosting

// show()
// function show()
// {
//     console.log("hello js")
// }

// --------------------anonymous Function
// const res=function(a,b){
//     console.log(a+b);
// }
// res(2,4);

// console.log(one(2))
// function one(n){
//     return n+1;
// }
// const two=function(n){
//     return n+2;
// }
// console.log(two(5));

// // -------------------------------set time out
// const hello=function(){
//     console.log("Hello CSE 34");
// }
// setTimeout(hello,3000);

// ------------------IIFE (immediately invoked function expression)

// (function one() {
//   console.log("Hello");
// })();

// (function () {
//   console.log("Data Base Connected");
// })();

// =============================This KeyWord
// const Person = {
//   name: "Vaibhav",
//   age: 19,
//   greet: function () {
//     console.log(`Hello ${Person.name}`);
//     console.log(`Hello ${this.name}`);
//   },
// };
// console.log(Person);
// Person.greet();
// Person.name = "Vaibhav Arora";
// Person.greet();

// function show() {
//   console.log(this);
// }
// show();

// const Person = {
//   name: "ABC",
//   greet: function () {
//     console.log (this);
//   },
// };
// console.log(Person.greet());
// console.log(this);


// "use strict"
// function show(){
//     console.log(this===global)
// }
// show()
// global.show()


// function outer()
// {
//   // "use strict"  
//   console.log(this===undefined);
//   function inner(){
//     console.log(this===undefined);
//   }
//   inner();
// }
// outer();


// const person={
//   name:"Vaibhav",
//   age:19,
//   greet:function(){
//     return this.name;
//   }
// };
// // console.log(person.greet())
// // let p1=person.greet;
// let p1=person.greet.bind(person);
// console.log(p1());


// function greet(city,country)
// {
//   console.log(`i'm ${this.name} from ${city} ${country}`);
// }
// const person={
//   name:"Vaibhav"
// }
// const fn=greet.bind(person,"MZN","INDIA");
// fn();

// const person={
//   name:"Vaibhav",
//   greet(){
//     console.log(this.name);
//   }
// };
// setTimeout(person.greet.bind(person),1000);

// function multiply(a,b){
//   return a*b;
// }
// const double=multiply.bind(null,2);
// console.log(double(5));


function Person(name)
{
  this.name=name;
}
Person.prototype.getName=function(){
  return this.name;
}
let p1=new Person("Arvind");
let p2=new Person("Vaibhav");
console.log(p1.name);
console.log(p1.getName())
console.log(p2.getName())

const person={
  name:"Vaibhav"
};
function display(message){
  console.log(message+" "+this.name);
}
display.call(person,"Hello");