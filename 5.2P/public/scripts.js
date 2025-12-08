async function getBooks() {
    const response = await fetch("/api/books", {
        method: "GET",
    });

    const books = await response.json();

    document.getElementById("bookList").innerText = books
};

getBooks()