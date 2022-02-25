require('dotenv').config()
const express = require('express');
const Cep = require('./controllers/Cep');


const app = express();

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong'})
});

app.get('/cep/:cep', Cep.findByCep)

app.listen(process.env.PORT, () => {
    console.log(`ouvindo na porta ${process.env.PORT}`);
})