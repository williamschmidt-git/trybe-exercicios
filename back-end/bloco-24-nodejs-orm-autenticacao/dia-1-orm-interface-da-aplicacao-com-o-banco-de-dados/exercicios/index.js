const express = require('express');
const bodyParser = require('body-parser');

const bookControler = require('./controllers/Book');

const app = express();

app.use(bodyParser.json());
app.use('/book', bookControler);

app.listen(3000, () => {
    console.log('Ouvindo na porta 3000')
})