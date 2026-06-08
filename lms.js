const prompt = require('prompt-sync')();

let option = 1;
function showMenu() {
    console.log("****Welcome to the Mini Library Management System****");
    console.log("Please select an option:\n1. Show available books\n2. Add a book\n3. Borrow a book\n4. Return a book\n5. Exit");
    option = parseInt(prompt("Enter your option: "));
}

showMenu();

let books_library = [{
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    borrowed: false
}, {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    borrowed: false
}, {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    borrowed: false
}, {
    id: 4,
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    borrowed: false
}, {
    id: 5,
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    borrowed: false
}, {
    id: 6,
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    borrowed: false
}, {
    id: 7,
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    borrowed: false
}];

switch (option) {
    case 1:
        showAvailableBooks();
        break;
    case 2:
        let title = prompt("Enter the book title: ");
        let author = prompt("Enter the book author: ");
        addBook(title, author);
        break;
    case 3:
        borrowBook(1);
        break;
    case 4:
        returnBook(1);
        break;
    case 5:
        process.exit();
        break;
    default:
        console.log("Invalid option. Please select a valid option.");
}



// Show all available books in the library
function showAvailableBooks() {
    let books = books_library.filter(book => !book.borrowed);
    let bookList = "Available Books:\n";
    books.forEach(book => {
        bookList += `${book.id} - ${book.title} by ${book.author}\n`;
    });
    console.log(bookList);
}

// Add a book to the library    
function addBook(title, author) {
    const newBook = {
        id: books_library.length + 1,
        title: title,
        author: author,
        borrowed: false
    };
    books_library.push(newBook);
    console.log(`Book "${title}" by ${author} has been added to the library.`);
}

// Borrow a book from the library
function borrowBook(id) {
    const book = books_library.find(book => book.id === id);
    if (book) {
        if (!book.borrowed) {
            book.borrowed = true;
            console.log(`You have borrowed "${book.title}" by ${book.author}.`);
        } else {
            console.log(`Sorry, "${book.title}" is already borrowed.`);
        }
    } else {
        console.log("Book not found.");
    }
}

// Return a book to the library
function returnBook(id) {
    const book = books_library.find(book => book.id === id);
    if (book) {
        if (book.borrowed) {
            book.borrowed = false;
            console.log(`You have returned "${book.title}" by ${book.author}.`);
        } else {
            console.log(`"${book.title}" is not currently borrowed.`);
        }
    } else {
        console.log("Book not found.");
    }
}

