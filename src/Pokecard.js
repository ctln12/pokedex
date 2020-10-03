import React, { Component } from 'react';

import './Pokecard.css';

class Pokecard extends Component {
  render() {
    let {pokemon} = this.props;
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
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
