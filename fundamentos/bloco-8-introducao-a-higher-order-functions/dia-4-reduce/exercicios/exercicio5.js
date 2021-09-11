const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
// const containsA =  names.filter((e) => e).reduce((x,y,index) => {
//     for(let i = 0; i < y.length-1; i += 1) {
//       y.includes('a') || y.includes('A')
//       x += 1;
//     }
//     return x
//     // y.includes('A') || y.includes('a') ? x += 1 : x += 0
//     // return x;
// }, 0);

const containsA = names.reduce((x, y, arr) => {
  for(let i = 0; i < y.length; i += 1) {
    y[i] === 'a' || y[i] === 'A' ? x += 1 : x;
  }return x;
}, 0)
console.log(containsA);

