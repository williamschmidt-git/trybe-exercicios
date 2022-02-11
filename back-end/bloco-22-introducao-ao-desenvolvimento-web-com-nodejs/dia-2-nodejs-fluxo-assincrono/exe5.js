//exe5
const fs = require('fs').promises;
const file = 'simpsons.json';

async function getById(id){
    const simpsons = await fs.readFile(file, 'utf-8')
    .then((data) => JSON.parse(data))

    const chosenSimpson = simpsons.find((e) => e.id === id)
    console.log(chosenSimpson)

    if(!chosenSimpson){
        throw new Error('id não encontrado')
    }

    return chosenSimpson
}
getById('1')