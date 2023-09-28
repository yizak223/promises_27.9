const BOOKS_ARRAY=[
    {
        Title:'harrry potter',
        Pages:600,
        Author:'J.K.R'
    },
    {
        Title:'minehert hazman',
        Pages:400,
        Author:'yizak alaluf'
    },
    {
        Title:'lord of ring',
        Pages:500,
        Author:'Ben kilinski'
    },
]
console.log(BOOKS_ARRAY);
// function Book(title,pages,author) {
//     this.Title=title;
//     this.Pages=pages;
//     this.Author=author;
// }

const btnSubmit=document.querySelector('#btnSubmit')
const nameBook=document.querySelector('#nameBook')
const pagesBook=document.querySelector('#pagesBook')
const authorBook=document.querySelector('#authorBook')
const NEW_BOOK_ARRAY=[]
btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    BOOKS_ARRAY.push({Title:nameBook.value,Pages:pagesBook.value,Author:authorBook.value})
    NEW_BOOK_ARRAY.push({Title:nameBook.value,Pages:pagesBook.value,Author:authorBook.value})
    console.log(BOOKS_ARRAY);
    localStorage.setItem('BOOKS',JSON.stringify(NEW_BOOK_ARRAY))
    localStorage.setItem('BOOKS',JSON.stringify(BOOKS_ARRAY))
    
})

console.log(localStorage.getItem('BOOKS'));

console.log(JSON.parse(localStorage.getItem('BOOKS')));
console.log(BOOKS_ARRAY);
console.log(NEW_BOOK_ARRAY);
