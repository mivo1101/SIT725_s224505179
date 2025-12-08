async function getBooks() {
    const res = await fetch("/api/books", {
        method: "GET",
    });

    const books = await res.json();

    const bookInfo = document.getElementById("bookList");
    bookInfo.innerHTML = "";

    books.forEach(book => {
        const item = document.createElement("p");
        item.textContent = `${book.title} - ${book.author}`;
        bookInfo.appendChild(item);
    });
};

window.onload = getBooks;