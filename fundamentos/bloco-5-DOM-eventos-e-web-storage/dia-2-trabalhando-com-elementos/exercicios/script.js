// 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; OK
// 2 Adicione a tag main com a classe main-content como filho da tag body ; OK 
// 3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; OK 
// 4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; OK
// 5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; OK
// 6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; OK
// 7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5; OK
// 8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6; OK
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. OK
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada; OK 
// Adicione a classe description nas 3 tags h3 criadas; OK
// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let tagH1 = document.createElement('h1');
document.body.appendChild(tagH1);
tagH1.innerText = 'Exercício 5.2 - Javascript DOM'

let tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

let tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

let tagP = document.createElement('p');
tagSection.appendChild(tagP);
tagP.innerText = `teste`;

let tagSectionLeft = document.createElement('section');
tagMain.appendChild(tagSectionLeft);
tagSectionLeft.className = 'left-content';

let tagSectionRight = document.createElement('section');
tagMain.appendChild(tagSectionRight);
tagSectionRight.className = 'right-content';

let tagImg = document.createElement('img');
tagImg.src = 'https://picsum.photos/200';
tagImg.className = 'small-image';
tagSectionLeft.appendChild(tagImg);

let listaNum = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let tagUl = document.createElement('ul');
tagSectionRight.appendChild(tagUl);

for (let i = 0; i < listaNum.length; i += 1) {
    let numero = listaNum[i];

    let numeroLista = document.createElement('li');
    numeroLista.innerText = numero;

    tagUl.appendChild(numeroLista);
}

for(let i = 0; i < 3; i += 1) {
    let tagh3 = document.createElement('h3');
    tagMain.appendChild(tagh3);
}

tagH1.classList.add('title');

let listaH3 = document.querySelectorAll('h3');

for(let i = 0; i < listaH3.length; i += 1) {
    listaH3[i].classList.add('description');
}

tagMain.removeChild(tagSectionLeft);

tagSectionRight.style.marginRight = 'auto';
tagSection.style.backgroundColor = 'aquamarine';

