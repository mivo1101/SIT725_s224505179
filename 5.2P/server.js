const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const booksRoutes = require('./routes/books.route');
app.use('/api/books', booksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});