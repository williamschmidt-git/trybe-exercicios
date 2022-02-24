const createUser = require('./middlewares/createUser');
const bodyParser = require('body-parser');
const { getAll } = require('./middlewares/getAllUsers');
const errorMiddleware = require('./middlewares/error');

const express = require('express');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.post('/user', createUser);
app.get('/user', getAll);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
})