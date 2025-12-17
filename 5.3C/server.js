const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookCatalog');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

app.use(express.static("public"));

const booksRoutes = require('./routes/books.route');
app.use('/api/books', booksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});