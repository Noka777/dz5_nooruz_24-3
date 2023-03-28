function filterBooks(books) {
    const booksWithU = [];
    const booksWithoutU = [];

    for (let i = 0; i < books.length; i++) {
        if (books[i].indexOf("у") !== -1) {
            booksWithU.push(books[i]);
        } else {
            booksWithoutU.push(books[i]);
        }
    }

    console.log("Книги с буквой «у»: ", booksWithU);
    console.log("Книги без буквы «у»: ", booksWithoutU);
}

const books = ["Дюна", "урок", "1984", "Мастер и Маргарита", "Гарри Поттер и философский камень", "Колыбель для кошки", "утка"];
filterBooks(books);

