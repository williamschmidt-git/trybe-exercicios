const { expect, assert } = require('chai');

const { writeFile } = require('../exercicios/exercicios4-5');

// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

// Exercício 5 Implemente a função descrita no exercício 4.
// Crie a função descrita no exercício 4 utilizando o módulo fs do node.
// Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.
// Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.


describe('Verifica os exercícios 4 e 5', () => {
    it('verifica se é uma string', () => {
        const answer = writeFile('arquivo.txt', 'vqv time')

        expect(answer).to.be.a('string');
    })

    it('verifica o conteudo', () => {
        const answer = writeFile('arquivo.txt', 'vqv time')

        expect(answer).to.be.equals('ok');
    })
})