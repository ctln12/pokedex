import React, { Component } from 'react';

class Pokecard extends Component {
  render() {
    let {pokemon} = this.props;
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return (
      <div>
        <h4>{pokemon.name}</h4>
        <img src={imgUrl} />
        <p>Type: {pokemon.type}</p>
        <p>EXP: {pokemon.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
