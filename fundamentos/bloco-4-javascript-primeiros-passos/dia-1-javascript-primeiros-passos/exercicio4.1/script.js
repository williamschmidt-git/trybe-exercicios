let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

// for(let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

// for (let i = 0; i < numbers.length; i += 1){
//     sum += numbers[i];
// }

// console.log(sum);


for (let i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
}

let  mediaAritmetica = sum / (numbers.length);

if(mediaAritmetica > 20){
    console.log("Valor maior que 20.")
}else {
    console.log("Valor menor, ou igual a 20.");
}