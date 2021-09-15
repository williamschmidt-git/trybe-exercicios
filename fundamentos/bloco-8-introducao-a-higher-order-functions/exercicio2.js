// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const result = () => { //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(1);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min)) + min;
}


const checkNumber = (number, callback) => {
    let resultNumber = callback();
    console.log(resultNumber);
    if(number == resultNumber) {
        return `Parabens, você ganhou!`
    } else {
        return `Tente novamente.` 
    }
}
console.log(checkNumber(4, result));

