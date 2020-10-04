import React, { Component } from 'react';

import './Pokecard.css';

// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let {pokemon} = this.props;
    let imgUrl = `${POKE_API}${padToThree(pokemon.id)}.png`;
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
