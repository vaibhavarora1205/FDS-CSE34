// // converting values to string
// a=123;
// s=""+a
// console.log(s,typeof(s))
// b=2123
// b=String(b)
// console.log(typeof(b))


// changing string
// Create new String
// str="Arvind";
// let str1="S"+str.slice(1);
// console.log(str1)

// let x="Javascript";

// const str="Hello";
// const str1=new String('Hello');
// console.log(str==str1)
// console.log(str===str1)

// ----------------------------------------------------------Slice method
// arr=["Apple","Banana","Mango","Grapes"];
// res=arr.slice(1,3);
// arr.slice(-1)
// arr.slice(-2)
// copy=arr.slice()

// str="Vaibhav"
// str.slice(0,4)
// copy=str.slice()


// ---------------------------------------------------------Splice Method
// Chamges Original String
// arr=[1,2,3,4,5]
// const removerd=arr.splice(1,2)
// console.log(removerd)
// console.log(arr)

// Append
// arr=[1,2,3,4,5]
// arr.append(5,3);


// -------------------------------repeat
// str="JS"
// str1=str.repeat(5)
// console.log(str1)

// const x='5';
// console.log(x.padStart(5,0))

// x="Javascript"
console.log(x.padStart(15,'a'))

// // UniCode and Cheracter codes
// console.log(x.charCodeAt(0))

// y="😅";
// console.log(y)
// console.log(y.codePointAt(0))

// // -------------------------------------------------string to arrys
// str="Javascript"
// arr=[...str];
// console.log(arr)


// a="2+4";
// console.log(eval(a))

// b=new String("2+4");
// console.log(eval(b));


// const n="Vaibhav";
// console.log(n.charAt(1));
// console.log(n.at(1))

s1="Hello";
s2="Learing";
s3="Programming";
res=conCat(" ",s2," ",s3)
console.log(res)