const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3002');
}); // 3

function handleHelloWorldRequest(_req, res) {
    res.status(200).send('Olá mundo!');
  }