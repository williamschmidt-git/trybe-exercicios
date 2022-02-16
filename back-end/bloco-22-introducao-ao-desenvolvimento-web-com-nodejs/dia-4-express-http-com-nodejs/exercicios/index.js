// const express = require('express');
// const bodyParser = require('body-parser');
// const simpsonsUtil = require('./fs-utils')

// const app = express();
// app.use(bodyParser.json());

// // app.get('/ping', (_req, res) => {
// //     res.send({message: 'pong'})
// // })

// // app.post('/greetings', function(req, res) {
// //     const { name, age } = req.body;
    
// //     if(age === 17) return res.status(401).json({message: 'Unauthorized'})
    
// //     return res.status(201).json({message: `Hello, ${ name }`})
// // })

// // app.post('/hello', function(req, res) {
// //     const { name } = req.body;
// //     return res.status(201).json({message: `Hello, ${ name }`})
// // })

// // app.put('/users/:name/:age', function(req, res) {
// //     const { name, age } = req.params;

// //     return res.status(201).json({message: `Seu nome é: ${name} e você tem ${age} anos de idade`})
// // })

// app.get('/simpsons', async(_req, res) => {
//     try {
//         const simpsons = await simpsonsUtil.getSimpsons();
//         return res.status(201).json(simpsons)
//     } catch (error) {
//         return res.status(500)
//     }
// })

// app.get('/simpsons/:id', async(req, res) => {
//     const simpsons = await simpsonsUtil.getSimpsons();
//     const { id } = req.params;

//     const simpson = simpsons.find((simpson) => simpson.id === id);
    
//     if(simpson.length < 1){
//         return res.status(404).json({message: 'simpson not found!'});
//     }
    
//     return res.status(202).json(simpson)

// })

// // Crie um endpoint POST /simpsons .
// // Este endpoint deve cadastrar novos personagens.
// // O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// // Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// // Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .

// app.post('/simpsons', async (req, res) => {
//     const { id, name } = req.query;
//     const simpsons = await simpsonsUtil.getSimpsons();

//     const checkIfsimpsonExists = simpsons.map((s) => s.id).includes(id);

//     if(checkIfsimpsonExists.length < 1) return res.status(409).json({message: 'id already exists'})

//     // if(checkIfsimpsonExists) return res.status(409).json({ message: 'id already exists'});
//     // if (simpsons.map(({ id }) => id).includes(id)) {
//     //     return res.status(409).json({ message: 'id already exists' });
//     //   }

//     simpsons.push({ id, name })

//     await simpsonsUtil.setSimpsons(simpsons)
//     return res.status(204).end();
// })

// app.listen(3001, () => {
//     console.log('aplicaçao ouvindo na porta 3001');
// })

const express = require('express');
const authMiddleware = require('./authMiddleware');
const app = express();

app.use(express.json());
app.use(authMiddleware);

/* ... */

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});


app.post('/signup', (req, res) => {
    const { email, password, firstName, phone } = req.body;
  
    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields' });
    }
  
    const token = crypto.randomBytes(8).toString('hex');
  
    res.status(200).json({ token });
  })

app.listen(3000, () => console.log('ouvindo na porta 3000!'));