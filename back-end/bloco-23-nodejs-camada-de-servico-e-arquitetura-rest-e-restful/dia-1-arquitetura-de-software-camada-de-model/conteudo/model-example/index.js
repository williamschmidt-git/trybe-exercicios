    // index.js

    const express = require('express');

    const author = require('./models/Author');
    const book = require('./models/book');

    const app = express();

    app.get('/authors/:id', async (req, res) => {
        const { id } = req.params;

        const newAuthor = await author.findById(id);

        if (!newAuthor) return res.status(404).json({ message: 'Not found' });

        res.status(200).json(newAuthor);
    });

    app.get('/authors', async (req, res) => {
        const authors = await author.getAll();

        res.status(200).json(authors);
    })

    app.get('/books', async (req, res) => {
        const books = await book.getAll();

        res.status(200).json(books)
    })

    app.get('/books/:id', async (req, res) => {
        const { id } = req.params;

        const newBook = await book.findById(id);

        return res.status(200).json(newBook);
    })

    

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Ouvindo a porta ${PORT}`);
    });