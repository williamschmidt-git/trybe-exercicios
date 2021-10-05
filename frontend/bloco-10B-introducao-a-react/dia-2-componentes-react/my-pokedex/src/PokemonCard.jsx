import React, { Component } from "react";
import data from './data';
import Pokemon from "./Pokemon";

class PokemonCard extends Component {
    render() {
        return data.map((pokemon) => {
            return <div id={pokemon.id}>
                <Pokemon />
                <p>{this.props.type}</p>
                <img src={pokemon.image} alt={pokemon.name}></img>
            </div>
        })
    }
}

export default PokemonCard