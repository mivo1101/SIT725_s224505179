const Book = require('../models/books.model');

async function getAllBooks() {
    return Book.find({}).lean({ getters: true });
};

async function getBookById(id) {
    return await Book.find(book => book["id"] === id)
};

module.exports = { getAllBooks, getBookById };