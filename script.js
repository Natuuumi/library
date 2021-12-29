let body = document.querySelector('body');
let addBookButton = document.querySelector('#newBook');
let form = document.querySelector('#form');
let submit = document.querySelector('#submit');
let myLibrary = [];

submit.addEventListener('click', function(e) {
	author = form.elements[0].value;
	title = form.elements[1].value;
	let bookName = title;
	pages = form.elements[2].value;
	if (title != '' && author != '' && pages != '') {
		bookName = new Book(author, title, pages);
	} else {
		alert('missing form info');
	}
	form.elements[0].value = '';
	form.elements[1].value = '';
	form.elements[2].value = '';
	form.elements[3].checked = false;
	form.setAttribute('class', 'removeDisplay');
	displayEachBook(myLibrary);
});

addBookButton.addEventListener('click', function(e) {
	form.removeAttribute('class', 'removeDisplay');
});

function Book(author, title, pages) {
	let newBook = document.createElement('p');
	let deleteButton = document.createElement('button');
	deleteButton.textContent = 'delete';
	let readButton = document.createElement('button');
	readButton.textContent = 'mark as complete';
	myLibrary.push(this);
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.bookId = undefined;
	this.displayBook = () => {
		console.log(this.bookId);
		if (this.bookId === undefined) {
			newBook.setAttribute('class', 'setIncomplete');

			newBook.textContent = title + ' by ' + author + ' ' + pages + ' pages';
			body.append(newBook);
			newBook.append(deleteButton);
			newBook.append(readButton);
			deleteButton.addEventListener('click', function(e) {
				newBook.setAttribute('class', 'removeDisplay');
			});
			readButton.addEventListener('click', function(e) {
				if (newBook.classList.contains('setIncomplete')) {
					newBook.setAttribute('class', 'setComplete');
					readButton.textContent = 'mark as incomplete';
				} else {
					newBook.setAttribute('class', 'setIncomplete');
					readButton.textContent = 'mark as complete';
				}
			});
		}
	};
}
let testBook = new Book('author', 'title', '433');
let newTestBook = new Book('new', 'book', '133');

function addBookToLibrary(book) {
	myLibrary.push(book);
}
let orderArray = [];
function displayEachBook(array) {
	for (index of array) {
		index.displayBook();
	}
	i = 0;
	for (index of array) {
		index.bookId = i;
	}
}

function removeFromLibrary(index) {
	myLibrary.splice(index, 1);
}
displayEachBook(myLibrary);
