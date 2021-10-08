import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numeroDeCliques: 0,
      segundoNumeroDeCliques: 0,
      backgroundColor: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.secHandleClick = this.secHandleClick.bind(this);
    this.thirdHandleClick = this.thirdHandleClick.bind(this);
  }

  handleClick() {
    if(this.state.numeroDeCliques % 2 === 0) {
      this.setState({ backgroundColor: 'green'}, () => {
        console.log(this.state.backgroundColor);
      })
    } this.setState({ backgroundColor: 'white'});

    this.setState({ numeroDeCliques: this.state.numeroDeCliques+1 })
    ;
  }

  secHandleClick() {
    this.setState((estadoAnterior, _props) => ({
      segundoNumeroDeCliques: estadoAnterior.segundoNumeroDeCliques + 1
    }))
  }

  thirdHandleClick() {
    console.log('trybe');
  }

  render() {
    console.log(this);
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        <button onClick={this.secHandleClick}>{this.state.segundoNumeroDeCliques}</button>
        <button onClick={this.thirdHandleClick}>meu botão</button>
      </div>
    )
  }
}

export default App;
