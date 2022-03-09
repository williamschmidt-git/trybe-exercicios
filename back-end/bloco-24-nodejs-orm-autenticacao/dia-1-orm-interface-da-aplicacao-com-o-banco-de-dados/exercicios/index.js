const express = require('express');
const bodyParser = require('body-parser');
const bookController = require('./controllers/bookController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/books', bookController);

app.listen(3000, () => {
    console.log(`ouvindo na porta ${PORT}`)
})