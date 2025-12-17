const bookService = require('../service/books.service');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).json({
            statusCode: 200,
            data: books,
            message: 'Book catalog retrived successfully!'
        });
    } catch(err) {
        next(err)
    }
};

exports.getBookById = async (req, res) => {
    try {
        id = req.params.id
        const book = await bookService.getBookById(id);
        if (book) {
            res.json(book)
        } else {
            res.status(404).json({
                error: "Book not found!"
            });
        }    
    } catch(err) {
        next(err);
    }
};