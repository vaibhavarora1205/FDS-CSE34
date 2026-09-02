// function display(a,b)
// {
//     return a+b;
// }
// console.log(display())

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
const Person = {
  name: "Vaibhav",
  age: 19,
  greet: function () {
    console.log(`Hello ${Person.name}`);
    console.log(`Hello ${this.name}`);
  },
};
console.log(Person);
Person.greet();
Person.name = "Vaibhav Arora";
Person.greet();
