import React, { Component } from 'react';

class Pokecard extends Component {

  render() {

    const {id, name, type, base_experience} = this.props;
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img src={imgSrc} alt=""/>
        <h3>Type: {type}</h3>
        <h3>Exp: {base_experience}</h3>

      </div>
    );
  }
}

export default Pokecard;

// id: 4, name: 'Charmander', type: 'fire', base_experience: 62