// function calculator(a, b, operation) {
//     return operation(a, b);
// }
// let add = function(a, b) {
//     return a + b;
// };
// let subtract = function(a, b) {
//     return a - b;
// };
// let multiply = function(a, b) {
//     return a * b;
// };

// let divide = function(a, b) {
//     return a / b;
// };
// console.log(calculator(10, 5, add));
// console.log(calculator(10, 5, subtract));
// console.log(calculator(10, 5, multiply));
// console.log(calculator(10, 5, divide));



// const add=(a,b)=> a+b;
// (add(10,20));

// let multiply=(
//     x,
//     y
// )=>
// x*y;


// const calculator = (a, b, operation) => {
//     return operation(a, b);
// };

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) =>{
//     b==0?a/b:"Division not possible";
// }
// console.log("Addition:", calculator(10, 5, add));
// console.log("Subtraction:", calculator(10, 5, subtract));
// console.log("Multiplication:", calculator(10, 5, multiply));
// console.log("Division:", calculator(10, 5, divide));

// even mubers form array

// let numbers=[1,4,5,56,7,3,80]
// const evenNumbers = numbers.filter(num => num % 2 === 0);

const fun=()=>({user:"Arvind"})
console.log(fun())


function test(a,b){
    const show=()=>{
        console.log(arguments);
    };
    show();
}
test(10,20);


const person=(name)=>{
    this.name=name;
}
const p1=new person("Arvind");
console.log(p1.name);

Person=()=>{
    console.log(Person.prototype);
}
Person();
const p2=new Person("Arvind");
console.log(p1.name);

let nums=[1,34,21,65,52,87]
nums.forEach((n)=>{
    console.log(n);
})

const num=['a','b','c','d','e'];
const values=num.forEach((n)=>{
    return n;
});
console.log(values);