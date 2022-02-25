const { expect, assert } = require('chai');
const { checkNumber } = require('../exercicios/exercicios1-3');
// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

describe('Exercício 1', () => {
    it('testa se a função existe', () => {
        expect(checkNumber).to.be.a('function');
    });

    describe('Quando number não é um número', () => {
        it('testa se é número', () => {
            const check = checkNumber({})
            try {
                check;
                assert(false);
            } catch (error) {
                assert(true, 'input inválido');
            }
        })
    })

    describe('Quando for uma string', () => {
        it('Verifica se o retorno é uma string', () => {
            const check = checkNumber(1);

            expect(check).to.be.a('string');
        })
    })

    describe('validação de números', () => {
        it('testa se o número é positivo', () => {
            const positivo = 'positivo'
            const check = checkNumber(1)
            expect(check).to.be.equal(positivo)
        })
        
        it('testa se o número é negativo', () => {
            const negativo = 'negativo';
            const check = checkNumber(-1)

            expect(check).to.be.equal(negativo)
        })

        it('testa se o número é neutro', () => {
            const neutro = 'neutro';
            const check = checkNumber(0)

            expect(check).to.be.equal(neutro)
        })
    })

})
