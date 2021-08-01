let a = 0;
let b = 0;
let soma;
let subtracao;
let multiplicacao;
let divisao;
let resto;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(`Qual o operador`, operadores => {
    switch(operadores){
        case "+":
            soma = a + b;
            console.log(soma);
            break;
    
        case "-":
            subtracao = a - b;
            console.log(subtracao);
            break;
    
        case "*":
            multiplicacao = a * b;
            console.log(multiplicacao);
            break;
        
        case "/":
            divisao = a / b;
            console.log(divisao);
            break;
        default: 
            "sair";
    
    }
    readline.close()
  })



