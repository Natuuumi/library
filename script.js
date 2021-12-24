let body = document.querySelector("body");
let myLibrary = ["peee", "eeee", "ttttt"];
let displayBook;
function Book(info) {
  this.info = () => {
    return "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet";
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book.info());
}

const theHobbit = new Book(
  "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
);

function displayEachBook(array) {
  for (book in array) {
    showBook = document.createElement("p");
    showBook.textContent = array[book];
    showBook.setAttribute("class", "bookStyle");
    body.append(showBook);
  }
}

console.log(theHobbit.info());

displayEachBook(myLibrary);
