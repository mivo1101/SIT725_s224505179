const Book = require('../models/books.model');

async function getAllBooks() {
    return Book.find({}).lean({ getters: true });
};

async function getBookById(id) {
    return await Book.findOne(book => book["id"] === id)
};

async function createBook(bookData) {
    const newBook = new Book(bookData);
    return await newBook.save();
}

async function updateBook(id, updateData) {
    return await Book.findOneAndUpdate({ id: id }, updateData, { new: true, runValidators: true });
}

module.exports = { getAllBooks, getBookById, createBook, updateBook };