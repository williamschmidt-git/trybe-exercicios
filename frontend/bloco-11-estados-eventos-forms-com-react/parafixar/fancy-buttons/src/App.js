import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numeroDeCliques: 0,
      segundoNumeroDeCliques: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.secHandleClick = this.secHandleClick.bind(this);
    this.thirdHandleClick = this.thirdHandleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.backgroundColor)
    // let gotButton = document.getElementsByClassName('Botao')[0];
    // gotButton.style.backgroundColor = this.state.backgroundColor;

    if(this.state.numeroDeCliques % 2 === 0) {
      // this.setState((estadoAnterior, _props) => ({
      //   backgroundColor: estadoAnterior.backgroundColor = 'green',
      // }))
      this.setState({ backgroundColor: 'green' });
    } else {
      this.setState({ backgroundColor: 'white'});
    }

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

 changeColor = (num) => num % 2 === 0 ? 'green' : 'red';

  render() {
    console.log(this);
    const { numeroDeCliques, segundoNumeroDeCliques } = this.state;
    return (
      <div>
        <button 
        className="Buttons"
        onClick={this.handleClick}
        style={{backgroundColor: this.changeColor(numeroDeCliques)}}>
           {this.state.numeroDeCliques}
           </button>
        <button
        className="Buttons"
        onClick={this.secHandleClick}
        style={{backgroundColor: this.changeColor(segundoNumeroDeCliques)}}>{this.state.segundoNumeroDeCliques}</button>
        <button onClick={this.thirdHandleClick}>meu botão</button>
      </div>
    )
  }
}

export default App;
