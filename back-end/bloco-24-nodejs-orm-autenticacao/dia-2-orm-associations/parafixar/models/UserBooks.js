module.exports = (sequelize, _DataTypes) => {
    const UserBook = sequelize.define('UserBook', {},
    { timestamps: false },
    );

    UserBook.associate = (models) => {
        models.Book.belongsToMany(models.User, {
            as: 'User',
            through: UserBook,
            foreignKey: 'book_id',
            otherKey: 'user_id'
        });
        models.User.belongsToMany(models.Book, {
            as: 'Book',
            through: UserBook,
            foreignKey: 'user_id',
            otherKey: 'book_id',
        });
    };

    return UserBook;
}; 