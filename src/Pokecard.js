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
        <h3 className="Pokecard-title">{pokemon.name}</h3>
        <div className="Pokecard-image">
          <img src={imgUrl} alt={pokemon.name} />
        </div>
        <div className="Pokecard-data">Type: {pokemon.type}</div>
        <div className="Pokecard-data">EXP: {pokemon.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
