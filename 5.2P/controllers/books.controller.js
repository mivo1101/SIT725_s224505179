const bookService = require('../service/books.service');

exports.getAllBooks = (req, res) => {
    const books = bookService.getAllBooks();
    res.json({
        status: 200,
        data: books,
        message: "Book list retrieved successfully."
    })
};

exports.getBookById = (req, res) => {
    id = req.body.id
    const book = bookService.getBookById(id);
    if (book != undefined) {
        res.json({
            status: 200,
            data: book,
            message: "Book is available with the given ID."
        })
    } else {
        res.json({
            status: 404,
            error: "Book is NOT available with the given ID."
        })
    }
};