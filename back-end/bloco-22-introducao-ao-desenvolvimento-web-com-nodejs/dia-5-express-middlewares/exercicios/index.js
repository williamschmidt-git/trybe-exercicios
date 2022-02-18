// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/userRouter');
const PORT = 3002;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log('Run server http://localhost:3002'));