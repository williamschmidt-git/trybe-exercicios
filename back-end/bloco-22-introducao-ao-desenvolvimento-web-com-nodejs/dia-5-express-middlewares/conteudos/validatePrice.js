const express = require('express');
const app = express();

function validatePrice(req, res, next) {
    const { price } = req.query;

    if(!price || price < 0 || isNaN(price)){
        res.status(400).json({message: 'Invalid data!'})
    }

    next();
}

app.post('/recipes', validatePrice, function(req, res){
    const { price } = req.query;
    parseInt(price)

    return res.status(201).json({ message: `o preço é: ${ price } `});
})

app.listen(3001, () => {
    console.log(`ouvindo na porta 3001`)
});