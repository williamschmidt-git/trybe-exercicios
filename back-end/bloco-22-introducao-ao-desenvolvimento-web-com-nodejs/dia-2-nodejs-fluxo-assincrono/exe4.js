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

// async function removeSimpson(){
//     const simpsons = await fs.readFile(file, 'utf-8')
//     .then((data) => JSON.parse(data));
//     console.log(simpsons)

//     const teste = simpsons.filter((e) => e.id !== '10' && e.id !== '6')
//     console.log(teste)

//     await fs.writeFile('./simpsons.json', JSON.stringify(teste))
    
// }

// removeSimpson();

// async function simpsonsFamily(){
//     const simpsons = await fs.readFile(file, 'utf-8')
//     .then((data) => JSON.parse(data))

// const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id)); <-- outra solução
//     const newFamily = simpsons.filter((e) => {
//         return e.id === '1' || e.id === '2' || e.id === '3' || e.id === '4'
//     })
//     console.log(newFamily);

//     fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamily))
// }

// simpsonsFamily()

async function addCharacter(){
    const simpsons = await fs.readFile('./simpsonFamily.json', 'utf-8')
        .then((data) => JSON.parse(data));

    simpsons.push({
        id: '8', name: 'Nelson Muntz'
    })

    fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons))
}

addCharacter()