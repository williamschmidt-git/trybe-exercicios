// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: '@Trybe12345',
  database: 'model_example'
});

module.exports = connection;