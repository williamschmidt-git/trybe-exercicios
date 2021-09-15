//Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let comparisonNumber;

// Seu código aqui.
function bubblesort(arr) { //https://www.section.io/engineering-education/sorting-algorithms-in-js/

    for(let i = 0; i < arr.length; i += 1) {
        for(let j = 0; j < arr.length - i - 1; j++) {

            if(arr[j+1] < arr[j]) {
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    }
    return arr;;
}
bubblesort(oddsAndEvens);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

