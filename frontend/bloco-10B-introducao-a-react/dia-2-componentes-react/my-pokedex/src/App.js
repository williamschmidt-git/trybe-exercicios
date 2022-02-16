import logo from './logo.svg';
import React, { Component } from 'react'
import data from './data'
import './App.css';
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div><h1>Pokedex</h1></div>
        
        {
          data.map((e) => {
            return(
              <Card pokemon={e} />
            )
          })
        }
      </div>
    )
  }
}

export default App;

// class MeuComponente extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return();
//   }
// }