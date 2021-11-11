const button_previous = document.getElementById('previous');
const button_next = document.getElementById('next');

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

  const reducer = (state = ESTADO_INICIAL, action) => {
      switch (action.type) {
        case "INCREMENT":

          return state.index + 1;
        case "DECREMENT":
          return state.index - 1;
        default: return state;
      };
  };
    
  const store = Redux.createStore(reducer);
  
//   store.subscribe(() => console.log(store.getState()))
  console.log(store.getState());



  button_next.addEventListener('click', () => {
    store.dispatch(NEXT_COLOR());
    store.subscribe(() => store.getState())
    console.log(store.getState())
  })

  button_previous.addEventListener('click', () => {
    store.dispatch(PREVIOUS_COLOR());
    // store.subscribe(() => store.getState())
    console.log(store.getState());
  })