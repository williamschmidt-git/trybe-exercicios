const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

app.post('/user/register', (req, res, next) => {
    const { username } = req.body;

    
})