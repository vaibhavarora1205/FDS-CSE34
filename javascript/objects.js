// // function Person(name,age){
// //     this.name=name;
// //     this.age=age;
// //     company=
// //         id:1,
// //         dep:'CSE'
// //     }
// // }
// // let obj=new Person("Vaibhav",19);
// // console.log(obj.name)
// // console.log(obj['age'])
// // obj['Job Type']='Student';
// // console.log(obj)
// // console.log(obj['Job Type'])
// // // obj.company="ABES"
// // // console.log(obj)
// // // delete(obj.company)
// // console.log(obj)

// // console.log('age' in obj)


// // object methods
// let person={
//     name:"Vaibhav",
//     age:19,
//     // greet:gr
//     greet:function()
//     {
//         console.log("Hello",name)
//     }
// };

// // person.greet=function(){
// //     console.log("Hello My name is:",this.name);
// // }
// // person.greet();
// function gr(){
//     console.log("Hello My name is:",this.name);
// }
// person.greet();
// // function greet(){
// //     console.log("Hello my name is:",this.name)
// // }
// person.greet

// const sym1=Symbol('sy');
// const sym2=Symbol('sy');
// const Person=new Object();
// Person[sym1]=123;
// Person.name='JS';
// Person


// const Person = {

//     'job type' : "faculty"
// };
// Person.greet = ()=>
//     (console.log("HELLO")
//     )
//     Person.greet();let P = {
//         name : 'A'
//     };
//     P = {
//         age : 25
//     };
//     P.dept = 'CSE' ;

//     const P = {
//         name : 's'
//     };
//     P = {age : 25};
//     P.dept = 'ECE' ;

//     delete P.name;

//     const Person = {
//         name : 'ABC',
//     };
//     Person.greet = function()
//     {
//         console.log('Hello' + this.name); //this
//     }
//     Person.greet()

//     const Person = {
//         name : 'ABC',
//     };
//     function greet()
//     {
//         console.log('Hello' + this.name)
//     }
//     Person.greet = greet ; //to access (2nd method)

//     const Person = {
//         name : 'ABC'
//         greet : function()
//         {
//             console.log('Hello'+this.name);
//         }
//     };

//     const Person = {
//         name : 'ABC',
//         greet()
//         {

//         }
//     };

//     //complex object --> object ke andar doosra object

//     const Person = {
//         name : 'Arjun'
//         age : 44,
//         laptop : {
//             CPU : 'I7',
//             ram : '8GB',
//             Brand : 'Lenovo',
//         }
//     };

//     Person.laptop.CPU //to access
//     Person ['laptop']['CPU']; //array notation se access
//     console.log(Person.laptop.CPU.length)


// Shallow Copy
// const p1={
//     name: "Vaibhav",
//     laptop:{
//         CPU: "i5",
//         RAM: "8gb"
//     }
// };
// const p2={...p1};
// p2.laptop.CPU="i7";


// Structured clone
// const p1={
//     name: "Vaibhav",
//     laptop:{
//         CPU: "i5",
//         RAM: "8gb"
//     }
// };
// const p2=structuredClone(p1);
// p2.laptop.CPU="i7";

// const p3= JSON.parse(JSON.stringify(p1));
// p3.laptop.RAM="i3"


console.log("Hello, \"What\'s up there\"")