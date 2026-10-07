// const Person={
//     name:"Vaibhav",
// }
// Person.name
// Person


// function sayHello(){
//     console.log('Hello')
// }
// Object.getPrototypeOf(sayHello)
// console.log(Object.getPrototypeOf(sayHello))

// console.log(Object.getPrototypeOf(Person))
// console.log(Person.__proto__===Object.getPrototypeOf(Person))

// function multiplyby5(n){
//     return 5*n;
// }
// multiplyby5.power=2;
// console.log(multiplyby5(5))
// console.log(multiplyby5.power)
// console.log(multiplyby5.prototype)


// let Person={
//     name:"Vaibhav",
//     age:19,
//     greet:function(){
//         console.log(`${this.name} and ${this.age}`)
//     }
// }
// Person.greet()
// // Object.greet()
// Object.prototype.show=function(){
//     console.log("I am show Function")
// }
// Object.show();
// // Object.greet()
// Person.show();


// function Person(name,age,salary){
//     this.name=name,
//     this.sal=salary,
//     this.age=age
// }
// Person.increaseSalary=function(inr){
//     Person.sal+=inr;
// }

// const P1=new Person("Vaibhav",19,10000)
// P1.increaseSalary(2500)
// P1.display();
// const P2=new Person("Yuvaan",20,0)
// P2.increaseSalary(233)
// P2.display();

// shadwoing and overriding
// using prototype
// const Parent={
//     role:"Teacher"
// }
// const Child={
//     // role:"Student"
// }
// console.log(Object.setPrototypeOf(Child,Parent))
// console.log(Child.role);

// using create
let Parent={
    role:"Teacher"
}
let Child=Object.create(Parent);
Child.role="Student"
console.log(Child.role)
// console.log(Child.Parent)