let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers = numbers.sort(function(a, b)
let sum = 0;
let maiorNumero = numbers[0];
let menorNumero = numbers[0];
let countImpar = 0;
let countPar = 0;

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

// for (let i = 0; i < numbers.length; i+= 1){
//     if(maiorNumero < numbers[i]){
//         maiorNumero = numbers[i];
//     }
// }

// console.log(maiorNumero);

// for (let i = 0; i < numbers.length; i+= 1){
//     if(menorNumero > numbers[i]){
//         menorNumero = numbers[i];
//     }
// }

// console.log(menorNumero);

// for (let i =  0; i < numbers.length; i += 1){
//     if(numbers[i] % 2 == 1){
//         countImpar++;
//         }
//     else(numbers[i] % 2 == 0)
//     {   
//         countPar++;
//     }
// }

// if(countImpar === 0){
//     console.log("nenhum valor ímpar encontrado.");
// }

// console.log(countImpar);
// console.log(countPar);

let arr = [];
for(let i = 0; i <= 24; i += 1){
    arr.push(i+1);
}

// console.log(arr);

let divisao;
for(let i = 0; i < arr.length; i += 1){
    divisao = (arr[i]/2);
    // console.log(divisao);
}

console.table(numbers);

