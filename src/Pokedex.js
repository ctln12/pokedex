import React, { Component } from 'react';

import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    const {pokemons} = this.props;
    return (
      <div>
        <h1>Pokedex</h1>
        {pokemons.map(pokemon => <Pokecard key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
