import React, { Component } from 'react';

import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const {pokemons, exp, isWinner} = this.props;
    let title;
    if(isWinner){
      title = <h2 className="Pokedex-winner">Winning Hand</h2>;
    } else {
      title = <h2 className="Pokedex-loser">Losing Hand</h2>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {exp}</h4>
        <div className="Pokedex-pokemons">
          {pokemons.map(pokemon => <Pokecard key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
