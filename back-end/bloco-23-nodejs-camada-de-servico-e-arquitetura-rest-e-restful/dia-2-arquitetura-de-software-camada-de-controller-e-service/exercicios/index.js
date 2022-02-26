require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express');
const Cep = require('./controllers/Cep');
const errorController = require('./controllers/errorController')


const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong'})
});

app.get('/cep/:cep', Cep.findByCep)
app.post('/cep/', Cep.create);

app.use(errorController);

app.listen(process.env.PORT, () => {
    console.log(`ouvindo na porta ${process.env.PORT}`);
})
