const readline = require('readline-sync');

function factorial(x) {
    return [0, 1].includes(x) ? 1 : x * factorial(x-1)
}

function getInput(){
    const x = readline.questionInt('Informe o valor de x: ');

    if(x <= 0) {
        console.log('digite um numero maior que zero')
        return;
    }

    const resultado = factorial(x);
    console.log(`O resultado é: ${resultado}`)
}

getInput()