const nome1 = document.getElementById('nome-1');
const sobrenome1 = document.getElementById('sobrenome-1')
const nome2 = document.getElementById('nome-2');
const sobrenome2 = document.getElementById('sobrenome-2');

const ESTADO_INICIAL_1 = {
    nome: 'Rodrigo',
    sobrenome: 'Santos da Silva',
    endereco: 'Rua Soldado Mathias, 765',
    cidade: 'Belo Horizonte',
  };

  const ESTADO_INICIAL_2 = {
    nome: 'Bruna',
    sobrenome: 'Santana Oliveira',
    endereco: 'Rua Holanda, 332',
    cidade: 'São Paulo',
  };

  const changename = () => {
    return {
        type: 'CHANGE_NAME'
    }
  }
  const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
    switch (action.type) {

      case 'CHANGE_NAME':
          return {
              nome: 'William',
              sobrenome: 'Schmidt',
          }
      default:
        return state;
    }
  };

  const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
    switch (action.type) {

      case 'CHANGE_NAME':
          return {
              nome: 'Ariane',
              sobrenome: 'Schmidt',
          }
      default:
        return state;
    }
  };

  const reducersCombinados = Redux.combineReducers({
      meuPrimeiroReducer,
      meuSegundoReducer,
  })

  const store = Redux.createStore(reducersCombinados)
  
  
  

  window.onload = () => {
    const name = document.getElementById('nome-1');
    setTimeout(() => {
      //Seu dispatch vem aqui //
      store.dispatch(changename())
      console.log(store.getState())
    }, 3000);
  };

  store.subscribe(() => {
      const first = store.getState().meuPrimeiroReducer;
      const second = store.getState().meuSegundoReducer;
      nome1.innerHTML = first.nome;
      sobrenome1.innerHTML = first.sobrenome;
      nome2.innerHTML = second.nome;
      sobrenome2.innerHTML = second.sobrenome;
  })