import React, { Component } from 'react';

import './Pokecard.css';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    let {pokemon} = this.props;
    let imgUrl = `${POKE_API}${pokemon.id}.png`;
    return (
      <div className="Pokecard">
        <h3>{pokemon.name}</h3>
        <img src={imgUrl} alt={pokemon.name} />
        <p>Type: {pokemon.type}</p>
        <p>EXP: {pokemon.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
