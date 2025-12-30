const bookService = require('../service/books.service');

const ALLOWED_FIELDS = ['id', 'title', 'author', 'year', 'genre', 'summary', 'price'];
const hasExtraFields = (body) => {
    const keys = Object.keys(body);
    return keys.some(key => !ALLOWED_FIELDS.includes(key));
};

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
            res.status(200).json(book);
        } else {
            res.status(404).json({
                error: "Book not found!"
            });
        }    
    } catch(err) {
        next(err);
    }
};

exports.createBook = async (req, res, next) => {
    try {
        if (hasExtraFields(req.body)) {
            return res.status(400).json({ 
                error: "Request contains invalid or unexpected fields." 
            });
        }

        const newBook = await bookService.createBook(req.body);        
        
        res.status(201).json({
            message: "Book created successfully",
            data: newBook
        });

    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ error: "Book with this ID already exists." });
        }
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        next(err);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updates = req.body;

        if (hasExtraFields(updates)) {
            return res.status(400).json({ 
                error: "Request contains invalid or unexpected fields." 
            });
        }

        if (updates.id && updates.id !== id) {
            return res.status(400).json({ error: "ID cannot be changed." });
        }

        const updatedBook = await bookService.updateBook(id, updates);

        if (!updatedBook) {
            return res.status(404).json({ error: " Book does not exist." });
        }

        res.status(200).json({
            message: "Book updated successfully",
            data: updatedBook
        });

    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        next(err);
    }
};