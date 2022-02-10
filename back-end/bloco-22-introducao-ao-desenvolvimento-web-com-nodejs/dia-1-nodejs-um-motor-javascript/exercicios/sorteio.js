const readline = require('readline-sync');


function logResultado(numero, resposta){
    if(numero !== resposta){
        console.log(`Opa, não foi dessa vez. O número era ${resposta}`);
    }

    return console.log("Parabéns, número correto!");
}

function randonNumber(){
    const number = Math.floor(Math.random() * 10);
    const guessedNumber = readline.questionInt('Escolha um número ');

    logResultado(guessedNumber, number);

    const againOrNot = readline.question('deseja jogar novamente? digite s para sim, e qualquer outra coisa para não')

    if(againOrNot !== 's') return console.log('Até a proxima!')
    randonNumber();
}

randonNumber();