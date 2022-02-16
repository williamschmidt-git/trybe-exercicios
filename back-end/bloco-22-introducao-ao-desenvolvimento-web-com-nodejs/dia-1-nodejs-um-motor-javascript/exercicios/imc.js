const readline = require('readline-sync');

const imc = (w, h) => {
    return (w / Math.pow(h, 2))
}

const newImc = () => {
    const weigth = readline.questionFloat('Qual seu peso? (em kilos) ')
    const heigth = readline.questionFloat('Qual sua altura? (em metros) ')
    const value = Number(imc(weigth, heigth).toFixed(2));
    console.log(value);
    if(value < 18.5) {
        return console.log('Abaixo do peso(magreza)')
    }
    else if(value >= 18.5 && value < 24.9) {
        console.log('Peso Normal')
    }
    else if(value >= 25.0 && value < 29.9){
        console.log('Acima do peso(sobrepeso)')
    }
    else if(value >= 30.0 && value < 34.9){
        console.log('Obesidade grau I')
    }
    else if(value >= 35.0 && value < 39.90){
        console.log('Obesidade grau II')
    }
    else{
        console.log('Obesidade grau III')
    }

    // N FUNCIONA \/
    // switch (value) {
    //     case value < 18.50:
    //         console.log('Abaixo do peso(magreza)');
    //         break;
    //     case value >= 18.50 && value < 24.90:
    //         console.log('Peso normal')
    //         break;
    //     case value >= 25.00 && value < 29.90:
    //         console.log('Acima do peso (sobrepeso)')
    //         break;
    //     case value >= 30.00 && value < 34.90:
    //         console.log('Obesidade grau I')
    //         break;
    //     case value >= 35.00 && value < 39.90:
    //         console.log('Obesidade grau II')
    //         break; 
    //     default:
    //         console.log('Obesidade grau III')
    //         break;
    // }
}

newImc();

// console.table(`Seu IMC é ${imc(weigth, heigth).toFixed(2)}`)

module.exports = imc;