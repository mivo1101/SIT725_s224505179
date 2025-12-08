const bookService = require('../service/books.service');

exports.getAllBooks = (req, res) => {
    const books = bookService.getAllBooks();
    res.json(books);
};

exports.getBookById = (req, res) => {
    id = req.params.id
    const book = bookService.getBookById(id);
    if (book ) {
        res.json(book)
    } else {
        res.status(400).json({
            error: "Book not found!"
        })
    }
};