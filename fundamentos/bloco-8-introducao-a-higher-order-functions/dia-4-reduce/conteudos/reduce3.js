const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:
//Solução é está a seguir, mas tente realizar a função sem vê-la. Tente criar uma usando reduce e filter , e outra apenas usando reduce .
// Solução usando filter e reduce :

// const findEvenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// })
// const getSum = (result, number) => result + number;
// const sumNumbers = findEvenNumbers.reduce(getSum);
// console.log(findEvenNumbers);
// console.log(sumNumbers);

//método do exercício
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (currentValue, number) => currentValue + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152

const achaPar = (acc, number) => ((number % 2 ===0) ? acc + number : acc)
const reduceTest = numbers.reduce(achaPar)
console.log(reduceTest);