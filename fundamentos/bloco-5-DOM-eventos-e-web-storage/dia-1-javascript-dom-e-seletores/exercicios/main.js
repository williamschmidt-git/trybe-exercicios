   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


// let blocoMain = document.getElementsByTagName('main')[0];
// blocoMain.style.backgroundColor = 'green';

// let blocoCentro = document.getElementsByClassName('center-content')[0];
// blocoCentro.style.backgroundColor = 'white';


function alteraTexto (elemento) { //exercicio 1
    document.querySelector(elemento).innerText = 'boa thig aaaa';
}
alteraTexto('p');

function alteraCorLados (elementos, cor) {
    document.querySelector(elementos).style.backgroundColor = cor;
}
alteraCorLados('main', 'rgb(76,164,109');

function alteraCorCentro (elementos, cor) {
    document.querySelector(elementos).style.backgroundColor = cor;
}

alteraCorCentro('.center-content', 'white');

function alteraH1 (elemento, texto) {
    document.querySelector(elemento).innerText = texto;
}
alteraH1('h1', 'Exercício 5.1 - Javascript');

function tagP_UpperCase (elemento) {
    let element = document.getElementsByTagName(elemento);
    for (let i = 0; i < element.length; i += 1) {
    element[i].innerHTML = element[i].innerHTML.toUpperCase();
    }
}
tagP_UpperCase('p');


function exibeConteudo (elemento) {
    element = document.getElementsByTagName(elemento);

    for (let i = 0; i < element.length ; i += 1) {
        console.log(element[i].innerText);
    }
}

exibeConteudo('p');