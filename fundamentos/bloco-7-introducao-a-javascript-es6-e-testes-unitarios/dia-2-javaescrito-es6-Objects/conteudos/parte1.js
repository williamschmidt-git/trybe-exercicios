// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

let objeto = {
    name: 'william',
}

const parte1 = (object, lastName, value) => {
    objeto.lastName = value;
    return console.log(`${objeto.name} ${objeto.lastName}`);
}

parte1(objeto, 'lastName', 'Schmidt');
