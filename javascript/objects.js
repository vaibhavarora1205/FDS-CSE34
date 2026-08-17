function Person(name,age)
{
    this.name=name;
    this.age=age;
}
let obj=new Person("Vaibhav",19);
console.log(obj.name)
console.log(obj['age'])
obj['Job Type']='Student';
console.log(obj)