    // index.js

    const express = require('express');

    const author = require('./models/Author');
    const book = require('./models/book');

    const app = express();

    app.get('/authors', async (req, res) => {
        const authors = await author.getAll();

        res.status(200).json(authors);
    })

    app.get('/books', async(req, res) => {
        const books = await book.getAll();
    })
    
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Ouvindo a porta ${PORT}`);
    });