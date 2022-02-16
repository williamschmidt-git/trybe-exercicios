const express = require('express');
const bodyParser = require('body-parser');
const simpsons = require('./simpsons.json');
const simpsonsUtil = require('./fs-utils')
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

// app.get('/ping', (_req, res) => {
//     res.send({message: 'pong'})
// })

// app.post('/greetings', function(req, res) {
//     const { name, age } = req.body;
    
//     if(age === 17) return res.status(401).json({message: 'Unauthorized'})
    
//     return res.status(201).json({message: `Hello, ${ name }`})
// })

// app.post('/hello', function(req, res) {
//     const { name } = req.body;
//     return res.status(201).json({message: `Hello, ${ name }`})
// })

// app.put('/users/:name/:age', function(req, res) {
//     const { name, age } = req.params;

//     return res.status(201).json({message: `Seu nome é: ${name} e você tem ${age} anos de idade`})
// })

app.get('/simpsons', async(_req, res) => {
    try {
        const simpsons = await simpsonsUtil.getSimpsons();
        return res.status(201).json(simpsons)
    } catch (error) {
        return res.status(500)
    }
})

app.get('/simpsons/:id', async function (req, res) {
    const simpsons = await simpsonsUtil.getSimpsons();
    const { id } = req.params;

    const simpson = simpsons.filter((simpson) => simpson.id === id);
    console.log(simpson);
    
    if(simpson.length < 1 || !simpson){
        return res.status(404).json({message: 'simpson not found!'});
    }
    
    return res.status(202).json(simpson)

})

// Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .

app.post('/simpsons', async function(req, res) {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtil.getSimpsons();

    // const checkIfsimpsonExists = simpsons.some((simpson) => simpson.name.includes(name));
    // console.log(checkIfsimpsonExists)

    // if(checkIfsimpsonExists) return res.status(409);
    if (simpsons.map(({ id }) => id).includes(id)) {
        return res.status(409).json({ message: 'id already exists' });
      }

    const newSimpson = simpsons.push({
        id,
        name
    })

    await simpsonsUtil.setSimpsons(newSimpson)
    return res.status(204).end();
})

app.listen(3001, () => {
    console.log('aplicaçao ouvindo na porta 3001');
})