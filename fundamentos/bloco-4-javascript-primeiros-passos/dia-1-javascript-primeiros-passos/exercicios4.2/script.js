let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maiorNumero = numbers[0];
let contadorImpar = 0;
let contadorPar = 0;
let menorNumero = numbers[0];


// for(let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

// for (let i = 0; i < numbers.length; i += 1){
//     sum += numbers[i];
// }

// console.log(sum);


// for (let i = 0; i < numbers.length; i += 1){
//     sum += numbers[i];
// }

// let  mediaAritmetica = sum / (numbers.length);

// if(mediaAritmetica > 20){
//     console.log("Valor maior que 20.")
// }else {
//     console.log("Valor menor, ou igual a 20.");
// }


for(let i = 0; (i < numbers.length); i += 1){
    if(numbers[i] > maiorNumero){
        maiorNumero = numbers[i];
    }
}
console.log(maiorNumero);

// for(let i = 0; (i < numbers.length); i += 1){
//     if(numbers[i] % 2 == 0){
//         contadorPar += 1;
//     } else {
//         contadorImpar += 1;
//     }
// }
// if(contadorImpar === 0){
//     console.log("nenhum valor ímpar encontrado.");
// }

// console.log(contadorImpar);
// console.log(contadorPar);
// console.log(numbers.length);

// for(let i = 0; (i < numbers.length); i += 1){
//     if(numbers[i] < menorNumero){
//         menorNumero = numbers[i];
//     }
// }
// console.log(menorNumero);
