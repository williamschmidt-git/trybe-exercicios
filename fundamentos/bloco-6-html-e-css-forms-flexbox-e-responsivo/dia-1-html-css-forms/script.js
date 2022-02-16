let arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
let arrayTextoEstado = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato rosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const form = document.getElementById('formularioID');
const body = document.body;
const date = document.createElement('input');

function createOptions() {
    const tagEstados = document.querySelector('#tag-estado');

    for (let i = 0; i < arrayTextoEstado.length; i += 1) {
        let teste = document.createElement('option');
        teste.innerHTML = arrayTextoEstado[i];
        tagEstados.appendChild(teste);
    }
}

function buttonPreventDefault(event) {
    let button = document.createElement('button');
    button.type = "submit";
    button.id = 'botaoSubmit';
    button.textContent = 'Enviar';
    button.addEventListener('click', function(event) {
        event.preventDefault();
    })
    form.appendChild(button);
}

createOptions();
buttonPreventDefault();

// Logo abaixo do formulário, crie um botão que:
// Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
// Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
// Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
// Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
// Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.