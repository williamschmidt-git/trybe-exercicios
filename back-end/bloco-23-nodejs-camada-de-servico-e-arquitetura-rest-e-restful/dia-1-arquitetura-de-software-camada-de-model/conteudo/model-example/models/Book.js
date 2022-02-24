const connection = require('./connection');

const getAll = async () => {
    const [books] = await connection.execute(
        `SELECT id, title, author_id FROM model_example.books;`,
    );
    
    return books.map(serialize).map(getBooks);
}

const serialize = (book) => ({
    id: book.id,
    title: book.title,
    author_id: book.author_id
});

const getBooks = ({id, title, author_id}) => {
    return {
        id, title, author_id
    };
};

const findById = async (search) => {
    const [book] = await connection.execute(
        `SELECT id, title, author_id FROM model_example.books WHERE id = ?`,
        [search]
    )
    
    if(book.length < 1 ) return null;

    // const { id, title, author_id } = book.map(serialize)[0];
    const teste = book.find((e) => e.id === parseInt(search))

    return getBooks(teste)
}




module.exports = { 
    getAll,
    findById
};