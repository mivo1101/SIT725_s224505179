const express = require('express');
const app = express();
const PORT = 3000;

const booksRoutes = require('./routes/books.route');

app.use('/api/books', booksRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to our Books Catalog. This is the Home Page!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});