const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
//1 - Dada uma matriz, transforme em um array.

const flatten = arrays.reduce((acc, sub) => acc.concat(sub), []);
console.log(flatten);

assert.deepStrictEqual(flatten, ['1', '2', '3', true, 4, 5, 6]);