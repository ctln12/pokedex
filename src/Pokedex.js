import React, { Component } from 'react';

import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const {pokemons, exp, isWinner} = this.props;
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">Pokedex</h1>
        <p>Total Experience: {exp}</p>
        <p>{isWinner ? 'WINNER' : 'LOSER'}</p>
        <div className="Pokedex-pokemons">
          {pokemons.map(pokemon => <Pokecard key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
