function Book(info) {
  this.info = () => {
    return "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet";
  };
}

const theHobbit = new Book(
  "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
);

console.log(theHobbit.info());
