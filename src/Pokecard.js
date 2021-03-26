import React, { Component } from 'react';
import './Pokecard.css'



class Pokecard extends Component {

  render() {

    const {id, name, type, base_experience} = this.props;

    const padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

    const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`
    // const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    // https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img src={imgSrc} alt=""/>
        <h3 className="Pokecard-data">Type: {type}</h3>
        <h3 className="Pokecard-data">Exp: {base_experience}</h3>

      </div>
    );
  }
}

export default Pokecard;

// id: 4, name: 'Charmander', type: 'fire', base_experience: 62