let books = [{
    bookName:"Harry Potter and the Philosopher's Stone",
    bookPrice: 550,
    authorName:"J.K. Rowling"
    },
    {
    bookName:"The Kite Runner",
    bookPrice: 250,
    authorName:"Khaled Hosseini"
    },
    {
    bookName:"Harry Potter and the Chamber of Secrets",
    bookPrice: 500,
    authorName:"J.K. Rowling"
    }   
]

var jas=JSON.stringify(books);

var jas1=JSON.parse(jas);
// console.log(jas1);

books.values(getAllBooks)

function getAllBooks(){
    console.log(books);

}
const eitherSort = (books = []) => {
    const sorter = (a, b) => {
       return +a.bookPrice - +b.bookPrice;
    };
    books.sort(sorter);
 };
 eitherSort(books);
 console.log(books);


//  function getBooksByAuthor(bookName){
//      let bn=bookName;
//      const oneBook = books.find((b) => b.bn == bn);
//      console.log(oneBook);

//  }

//  getBooksByAuthor("J.K. Rowling");
const index=books.findIndex(function(book,index){
    return books.authorName==="J.K. Rowling";
})
console.log(index);

const findBook =function(books,authorName){
    const index=books.findIndex(books,index){
        return books.authorName.tolowe


    }
}