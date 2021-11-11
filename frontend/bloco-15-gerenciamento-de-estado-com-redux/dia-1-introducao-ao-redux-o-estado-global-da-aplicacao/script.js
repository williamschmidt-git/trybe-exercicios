const button_previous = document.getElementById('previous');
const button_next = document.getElementById('next');
const button_random = document.getElementById('random');
const value = document.getElementById('value');
const container = document.getElementById('container');

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  console.log(cor);
  return cor;
}

const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  const NEXT_COLOR = () => {
    return {
      type: 'INCREMENT',
    }
  }

  const PREVIOUS_COLOR = () => {
    return {
      type: 'DECREMENT',
    }
  }

  const RANDOM_COLOR = () =>{
    return {
      type: 'RANDOM',
    }
  }

  const reducer = (state = ESTADO_INICIAL, action) => {
      switch (action.type) {
        case "INCREMENT":
          return {
              ...state,
              index: state.index + 1,
          }
        case "DECREMENT":
            return {
                ...state,
                index: state.index - 1,
            }
        case "RANDOM":
          return {
             ...state,
             colors: [...state.colors, criarCor()]
          }
        
        default: return state;
      };
  };
    
  const store = Redux.createStore(reducer);
  
//   store.subscribe(() => console.log(store.getState()))
  console.log(store.getState());

  // Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container . Você deverá ser capaz de ver as cores mudando ao fundo, e o nome da cor exibida.

  button_next.addEventListener('click', (event) => {
    event.preventDefault();
    store.dispatch(NEXT_COLOR());
    store.subscribe(() => store.getState())
    const state = store.getState();
    const index = store.getState().index;

    container.style.backgroundColor = state.colors[index]
    value.innerHTML = state.colors[index]
  })

  button_previous.addEventListener('click', (event) => {
    event.preventDefault();

    store.dispatch(PREVIOUS_COLOR());
    store.subscribe(() => store.getState())
    
    const state = store.getState()
    const index = store.getState().index;
    container.style.backgroundColor = state.colors[index]
    value.innerHTML = state.colors[index]
  })

  button_random.addEventListener('click', (event) => {
    event.preventDefault();
    store.dispatch(RANDOM_COLOR());
    store.subscribe(() => store.getState())
    const state = store.getState();
    const index = store.getState().index;

    console.log(store.getState().colors)
  })

  