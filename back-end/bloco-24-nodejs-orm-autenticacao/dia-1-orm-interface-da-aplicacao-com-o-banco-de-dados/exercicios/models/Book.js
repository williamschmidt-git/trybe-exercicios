const Book = (sequelize, dataTypes) => {
    const Book = sequelize.define("Book", {
        title: dataTypes.STRING,
        author: dataTypes.STRING,
        pageQuantity: dataTypes.INTEGER,
        createdAt: new Date()
    })

    return Book;
}

module.exports = Book;