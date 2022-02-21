const e = require('express');
const connection = require('./connection');

const getAll = async () => {
    const [books] = await connection.execute(
        `SELECT id, title, author_id FROM model_example.books;`,
    )

    return books.map(serialize).map(getBooks);
}

const serialize = (book) => ({
    id: book.id,
    title: book.title,
    author_id: book.author_id
})

const getBooks = ({id, title, author_id}) => {
    return {
        id, title, author_id
    }
}

module.exports = { 
    getAll,
}