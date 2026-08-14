// let x=5;
// let f=1;
// for(let i=1;i<=x;i++)
// {
//     f=f*i;
// }
// console.log(`Factorial of ${x} is ${f}`);

// let a=0;
// let b=1;
// for(let i=0;i<5;i++)
// {
//     let next=a+b;
//     a=b;
//     b=next;
//     console.log(next);
// }

// patterns
// i=0;
// for(; ;i=i+2)
// {
//     if(i>10)
//         {
//             break;
//         }
//         console.log(i);
// }

// Sum of digit of 5 digit number
// reverse
// prime
// fibinacci

// let num=12345
// let sum=0;
// let a;
// while(num>0)
// {
//     a=num%10;
//     sum+=a;
//     num=num/10;
// }
// console.log(Math.floor(sum))


// // reverse
// let num=12345
// let rev=0;
// let a;
// while(num>0)
// {
//     a=num%10;
//     rev=rev*10+a
//     num=num/10;
// }
// console.log(rev)

// let a=0;
// let b=1;
// console.log(a)
// console.log(b)
// for(let i=0;i<5;i++)
// {
//     let next=a+b;
//     a=b;
//     b=next;
//     console.log(next);
// }

// prime
// let num=13;
// for(let i=2;i<num/2;i++)
// {
//     if(num%i==0)
//     {
//         console.log("Not prime");
//         break;
//     }
// }
// console.log("Prime");


let sum=0;
for(let i=0;i<=9;i++, sum+=i)
console.log(sum);