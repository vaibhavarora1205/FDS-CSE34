const books=[
    {title: "Let us C++", price:400,author:"Y.Kanitkar"},
    {title: "Java Programming", price:699,author:"James Gosling"},
    {title: "Pyhton", price:799,author:"Guido Von Rossum"},
    {title: "Let us C++", price:849,author:"Bjame Stroustrup"},
    {title: "Javascript", price:1499,author:"Brendan Eich"}
]

// those books whose price is greater than 800
// array containing only title of books
// calculate total price of all books 
// array having title of books that are expensive means >800
priceGreater=books.filter(book=>{
    return book.price>800;
})
console.log(priceGreater)


titles=books.map(book=>{
    return book.title;
})
console.log(titles)


totalPrice=books.reduce((sum,book)=>{
    return sum+book.price;
},0)
console.log(totalPrice)



expensiveBooks=books.filter(book=>{
    return book.price>800;
}).map(book=>{
    return book.title;
})
console.log(expensiveBooks)

// calucate and display averqage price of books
// find and list all books wh=ith price less than 600
// generate price list showing book title along with price
// calculate total price of books written by Brendan Eich

average=totalPrice/5;
console.log(average)


cheapBooks=books.filter(book=>{
    return book.price<600;
}).map(book=>{
    return book.title;
})

console.log(cheapBooks)

priceList=books.map(book=>{
    return [book.price,book.title]
})
console.log(priceList)

priceOfBooksByBrendan=books.filter(book=>{
    return book.author=='Brendan Eich';
}).reduce((sum,book)=>{
    return sum+book.price;
},0)
console.log(priceOfBooksByBrendan)



// book with longest title
// find and display title of books whose price is greater than average price
// program to count how many books are writen by each author

lengths=books.map(book=>{
    return book.title.length;
})
maxLength=lengths.reduce((max,length)=>{
    return max>length?max:length;
},lengths[0]);
console.log(maxLength)


averagePriceBooks=books.filter(book=>{
    return book.price>average;
}).map(book=>{
    return book.title;
})
console.log(averagePriceBooks)

booksByauthor=books.reduce((acc,book)=>{
    acc[book.author]=(acc[book.author] || 0)+1;
    return acc;
},{})
console.log(booksByauthor)


// arr=['vaibhav','arora','vaibhav']
// const count =arr.reduce((acc,str)=>{
//     acc[str]=(acc[str] || 0)+1;
//     return acc;
// },{})

// console.log(count)


// 