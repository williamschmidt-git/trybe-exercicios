const fs = require('fs').promises;

const file = 'simpsons.json';

//exe4
// fs.readFile(file, 'utf-8')
//     .then((data) => {
//         return JSON.parse(data);
//     }).then((result) => {
//         result.map((e) => console.log(`${e.id} - ${e.name}`))
//     })


// async function getById(id){
//     const simpsons = await fs.readFile(file, 'utf-8')
//     .then((data) => JSON.parse(data))

//     const chosenSimpson = simpsons.find((e) => e.id === id)
//     console.log(chosenSimpson)

//     if(!chosenSimpson){
//         throw new Error('id não encontrado')
//     }

//     return chosenSimpson
// }

async function removeSimpson(){
    const simpsons = await fs.readFile(file, 'utf-8')
    .then((data) => JSON.parse(data));
    console.log(simpsons)

    const teste = simpsons.filter((e) => e.id !== '10' && e.id !== '6')
    console.log(teste)

    await fs.writeFile('./simpsons.json', JSON.stringify(teste))
    
}

removeSimpson()