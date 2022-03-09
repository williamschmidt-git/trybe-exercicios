const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        userId: { type: DataTypes.INTEGER, primarKey: true },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER
    },
    {
        timestamps: false,
        tableName: 'Users',
        underscored: true
    })

    return User;
}