const express = require('express');
const app = express();

// middleware to read JSON body
app.use(express.json());

// in‑memory books array
let books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" }
];


// ✅ GET all books
app.get('/books', (req, res) => {
  res.json(books);
});


// ✅ POST a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title
  };
  books.push(newBook);
  res.json(newBook);
});


// ✅ PUT (update) a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = req.body.title;
  res.json(book);
});


// ✅ DELETE a book
app.delete('/books/:id', (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.json({ message: 'Book deleted' });
});


// start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
