const assert = require('assert');

const sum  = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui  

const expected = sum(4, 5);
// assert.strictEqual(expected, 9, 'NOPE')
// assert.strictEqual(sum(0,0), 1, 'NOPE')

const teste = 'parameters must be numbers'

assert.throws(() => {
    sum(4, '5')
},/parameters must be numbers$/)
// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")