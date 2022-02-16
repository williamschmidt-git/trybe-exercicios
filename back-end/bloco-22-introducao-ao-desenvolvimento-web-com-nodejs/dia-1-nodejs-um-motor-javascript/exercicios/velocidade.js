const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distancia? ')
const tempo = readline.questionInt('Qual o tempo? ')

console.log(`a velocidade é: ${distancia/tempo}`)