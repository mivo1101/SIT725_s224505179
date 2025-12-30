const btn = document.querySelector('button');
const bookList = document.getElementById('bookList');
const bookDetails = document.getElementById('bookDetails');

const getBookPrice = (price) => {
    if (typeof price === 'string') return price;
    if (price && price.$numberDecimal) return price.$numberDecimal;
    return price || '0.00';
};

function renderList(books) {
    bookList.innerHTML = '';
    bookDetails.innerHTML = '';

    if (!Array.isArray(books) || books.length === 0) {
        bookList.textContent = 'No books found!';
        return;
    }

    books.forEach(book => {
        const p = document.createElement('div');
        const price = getBookPrice(book.price);

        p.textContent = `${book.title} ${price} AUD`;

        p.style.borderBottom = "1px solid #eee";
        p.style.padding = "10px";
        p.style.transition = "background-color 0.2s";

        p.onmouseover = () => p.style.backgroundColor = "#f0f0f0";
        p.onmouseout = () => p.style.backgroundColor = "transparent";

        p.addEventListener('click', () => {
            renderDetails(book);
        });

        bookList.appendChild(p);
    });
}

function renderDetails(book) {
    const price = getBookPrice(book.price);

    bookDetails.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 20px; border-radius: 8px">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Summary:</strong> ${book.summary}</p>
            <p><strong>Price:</strong> ${price} AUD</p>
    `;
}

async function fetchBooks() {
    bookList.innerHTML = 'Loading books...';
    try {
        const res = await fetch('/api/books');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        renderList(data.data);
    } catch(err) {
        console.error(err);
        bookList.textContent = 'Error loading books!';
    }
}

if (btn) {
    btn.addEventListener('click', fetchBooks);
}